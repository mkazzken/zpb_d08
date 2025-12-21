// Folder structure
const folderStructure = {
    'BP3_balance': {
        'balance-ispoln': ['zbp_d08_ocenka.json'],
        'BP3-DZO-balance-dzo': ['structure_zbp_d06_fact.json', 'structure_zbp_d06_ocenka.json', 'structure_zbp_d06_plan.json'],
        'BP3-P-PK-predicted-balance': ['structure_zbp_d06_ocenka.json', 'structure_zbp_d06_plan.json', 'structure_zbp_d06_prognoz.json'],
        'BP3-Q-PK' : ['zbp_d08.json']
    },
    'BP3_dds': {
        'BP4-DZO-dds': ['zbp_d03_fact.json', 'zbp_d03_ocenka.json', 'zbp_d03_plan.json'],
        'BP4-P-PK-predicted-dds': ['zbp_d05_ocenka.json', 'zbp_d05_plan.json', 'zbp_d05_prognoz.json'],
        'BP4-Q-PK-dds-ispoln': ['zbp_d03_ocenka.json']
    },
    'BP6_TFR': {
        'BP6-M-PK-tfr-monthly': ['zbp_d17_fact.json', 'zbp_d17_ocenka.json', 'zbp_d17_text.json'],
        'BP6-P-PK_prognoz-tfr': ['zbp_d06_prognoz.json', 'zbp_d15_ocenka.json', 'zbp_d15_plan.json'],
        'BP6-Q-PK-TFR': ['zbp_d17_fact_period.json', 'zbp_d17_ocenka.json', 'zbp_d17_text.json']
    }
};

let currentPath = [];
let currentTableId = null;

function getLang() {
    return window.i18n?.currentLang || 'ru';
}

function getTableLabel(table) {
    const translated = window.i18n?.t(table.nameKey);
    return translated || table.id;
}

// Update breadcrumb based on current path
function updateBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;

    const home = window.i18n?.t('breadcrumb.home') || 'Главная';
    const docs = window.i18n?.t('breadcrumb.docs') || 'Документация API';

    let breadcrumbHTML = `<li class="breadcrumb-item"><a href="https://sk.kz/">${home}</a></li>`;
    breadcrumbHTML += `<li class="breadcrumb-item"><a href="#" id="breadcrumb-docs">${docs}</a></li>`;

    currentPath.forEach((part, index) => {
        const isLast = index === currentPath.length - 1;
        if (isLast) {
            breadcrumbHTML += `<li class="breadcrumb-item active" aria-current="page">${part}</li>`;
        } else {
            breadcrumbHTML += `<li class="breadcrumb-item"><a href="#" data-path-index="${index}">${part}</a></li>`;
        }
    });

    breadcrumb.innerHTML = breadcrumbHTML;

    // Add event listeners
    const docsLink = document.getElementById('breadcrumb-docs');
    if (docsLink) {
        docsLink.addEventListener('click', (event) => {
            event.preventDefault();
            showFolders([]);
        });
    }

    document.querySelectorAll('[data-path-index]').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const index = parseInt(link.getAttribute('data-path-index'));
            showFolders(currentPath.slice(0, index + 1));
        });
    });
}

// Load JSON data for a table
function loadTableData(fileName) {
    const lang = getLang();
    const path = currentPath.slice(0, -1).join('/');
    const jsonPath = `./data/${lang}/${path}/${fileName}`;
    return fetch(jsonPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const tableContainer = document.getElementById('tableContainer');
            const fieldHeader = window.i18n?.t('tableHeaders.field') || 'Поле';
            const descHeader = window.i18n?.t('tableHeaders.description') || 'Описание';
            const exampleHeader = window.i18n?.t('tableHeaders.valueExample') || 'Пример значения';
            const notesHeader = window.i18n?.t('tableHeaders.notes') || 'Примечание';

            tableContainer.innerHTML = `
                <div class="card mb-4">
                    <div class="card-header">
                        <h3 class="mb-0">${fileName}</h3>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>${fieldHeader}</th>
                                        <th>${descHeader}</th>
                                        <th>${exampleHeader}</th>
                                        <th>${notesHeader}</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;

            const tbody = tableContainer.querySelector('tbody');

            if (!Array.isArray(data)) {
                console.error(`Invalid data for ${fileName}:`, data);
                tbody.innerHTML = '<tr><td colspan="4" class="text-center text-danger">Ошибка: данные не являются массивом.</td></tr>';
                return;
            }

            if (data.length === 0) {
                tbody.innerHTML = '<tr><td colspan="4" class="text-center text-muted">Нет данных для отображения.</td></tr>';
                return;
            }

            data.forEach(item => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${item.field || ''}</td>
                    <td>${item.description || ''}</td>
                    <td>${item.value_example || ''}</td>
                    <td>${item.notes || ''}</td>
                `;
                tbody.appendChild(tr);
            });

            console.log(`Successfully loaded ${data.length} rows into ${fileName} (${lang})`);
        })
        .catch(error => {
            console.error(`Error loading data for ${fileName}:`, error);
            const tableContainer = document.getElementById('tableContainer');
            tableContainer.innerHTML = `
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="alert alert-danger">
                            Ошибка загрузки данных: ${error.message}
                        </div>
                    </div>
                </div>
            `;
        });
}

// Show folders/files at the given path
function showFolders(path) {
    currentPath = path;
    currentTableId = null;
    const folderList = document.getElementById('folderList');
    const tableContainer = document.getElementById('tableContainer');

    folderList.innerHTML = '';
    tableContainer.classList.add('d-none');

    let items = [];
    if (path.length === 0) {
        // Root folders
        items = Object.keys(folderStructure);
    } else if (path.length === 1) {
        // Subfolders
        const mainFolder = path[0];
        if (folderStructure[mainFolder]) {
            items = Object.keys(folderStructure[mainFolder]);
        }
    } else if (path.length === 2) {
        // Files
        const mainFolder = path[0];
        const subFolder = path[1];
        if (folderStructure[mainFolder] && folderStructure[mainFolder][subFolder]) {
            items = folderStructure[mainFolder][subFolder];
            // Show files as buttons to load tables
            items.forEach(file => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'list-group-item list-group-item-action';
                button.textContent = file;
                button.addEventListener('click', () => {
                    showTable(file);
                });
                folderList.appendChild(button);
            });
            updateBreadcrumb();
            return;
        }
    }

    // Show folders
    items.forEach(item => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'list-group-item list-group-item-action';
        button.textContent = window.i18n?.t('folders.' + item) || item;
        button.addEventListener('click', () => {
            showFolders([...path, item]);
        });
        folderList.appendChild(button);
    });
    updateBreadcrumb();
}

// Show table for a file
function showTable(fileName) {
    currentPath.push(fileName);
    currentTableId = fileName;
    const folderList = document.getElementById('folderList');
    const tableContainer = document.getElementById('tableContainer');

    folderList.innerHTML = '';
    tableContainer.classList.remove('d-none');

    loadTableData(fileName);
    updateBreadcrumb();
}

document.addEventListener('DOMContentLoaded', function() {
    const initPromise = window.i18n?.ready || Promise.resolve();

    initPromise.then(() => {
        showFolders([]);

        document.querySelectorAll('[data-lang]').forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const lang = item.getAttribute('data-lang');
                window.i18n?.setLanguage(lang);
            });
        });

        window.i18n?.onLanguageChange(() => {
            showFolders(currentPath);
            if (currentTableId) {
                loadTableData(currentTableId);
            }
        });
    });
});

