// Folder structure
const folderStructure = {
    'BP3_balance': {
        'balance-ispoln': [
            'zbp_d08_ocenka.json'
        ],
        'BP3-P-PK-predicted-balance': [
            'bp3-p-pk_zbp_d06_ocenka.json'
        ],
        'BP3-Q-PK': [
            'zpb_d08.json'
        ],
        'BP3-DZO-balance-dzo': [
            'structure_zbp_d06_fact.json'
        ]
    },

    'BP3_dds': {
        
        'BP4-P-PK-predicted-dds': [
            'zbp_d05_ocenka.json'
        ],
        'BP4-Q-PK-dds-ispoln': [
            'bp4-q-pk-zbp_d03_ocenka.json'
        ],
        'BP4-DZO-dds': [
            'zbp_d03_fact.json'
        ]
        
        
    },

    'BP6_TFR': {

        'BP6-P-PK_prognoz-tfr': [
            'bp6-p-pk-zbp_d06_prognoz.json'
        ],
        'BP6-Q-PK-TFR': [
            'bp6-q-pk-zbp_d17_fact_period.json'
        ],
        'BP6-M-PK-tfr-monthly': [
            'bp6-m-pk-zbp_d17_fact.json'
        ],
        'BP6-DZO-TFR': [
            'zbp_d15_plan.json'
        ]
    }
};


let currentPath = [];
let currentTableId = null;
let navigationHistory = []; 
let currentHistoryIndex = -1;
let isNavigatingHistory = false;


function addToHistory(entry) {
    if (isNavigatingHistory) return;
    // Remove all entries after current index
    navigationHistory = navigationHistory.slice(0, currentHistoryIndex + 1);
    navigationHistory.push(entry);
    currentHistoryIndex++;
    updateNavigationButtons();
}

function goBack() {
    if (currentHistoryIndex > 0) {
        currentHistoryIndex--;
        isNavigatingHistory = true;
        navigateToHistoryEntry(navigationHistory[currentHistoryIndex]);
        isNavigatingHistory = false;
        updateNavigationButtons();
    }
}

function goForward() {
    if (currentHistoryIndex < navigationHistory.length - 1) {
        currentHistoryIndex++;
        isNavigatingHistory = true;
        navigateToHistoryEntry(navigationHistory[currentHistoryIndex]);
        isNavigatingHistory = false;
        updateNavigationButtons();
    }
}

function navigateToHistoryEntry(entry) {
    if (entry.type === 'folder') {
        showFolders(entry.path, false);
    } else if (entry.type === 'table') {
        currentPath = [...entry.path];
        showTable(entry.fileName, false);
    }
}

function updateNavigationButtons() {
    const backBtn = document.getElementById('backBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    if (backBtn) backBtn.disabled = currentHistoryIndex <= 0;
    if (forwardBtn) forwardBtn.disabled = currentHistoryIndex >= navigationHistory.length - 1;
}

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
            showFolders([], true);
        });
    }

    document.querySelectorAll('[data-path-index]').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const index = parseInt(link.getAttribute('data-path-index'));
            showFolders(currentPath.slice(0, index + 1), true);
        });
    });
}

function findPath(fileName) {
    for (const main in folderStructure) {
        for (const sub in folderStructure[main]) {
            if (folderStructure[main][sub].includes(fileName)) {
                return `${main}/${sub}`;
            }
        }
    }
    return '';
}

// Load JSON data for a table from embedded data (no HTTP / fetch)
function loadTableData(fileName) {
    const lang = getLang();
    let path = currentPath.slice(0, -1).join('/');
    if (path.split('/').length < 2) {
        path = findPath(fileName);
    }
    console.log('Loading', fileName, 'path:', path, 'currentPath:', currentPath);

    try {
        if (!window.EMBEDDED_DATA) {
            throw new Error('EMBEDDED_DATA is not available');
        }

        const [mainFolder, subFolder] = path.split('/');
        if (!mainFolder || !subFolder) {
            throw new Error(`Некорректный путь для данных: "${path}"`);
        }

        const data =
            window.EMBEDDED_DATA?.[lang]?.[mainFolder]?.[subFolder]?.[fileName];

        if (!data) {
            throw new Error(
                `Данные не найдены для ${lang}/${mainFolder}/${subFolder}/${fileName}`
            );
        }

        const tableContainer = document.getElementById('tableContainer');
        const fieldHeader = window.i18n?.t('tableHeaders.field') || 'ID Поля';
        const descHeader = window.i18n?.t('tableHeaders.description') || 'Название поля';
        const exampleHeader =
            window.i18n?.t('tableHeaders.valueExample') || 'Описание';
        const notesHeader = window.i18n?.t('tableHeaders.notes') || 'Пример';

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
            tbody.innerHTML =
                '<tr><td colspan="4" class="text-center text-danger">Ошибка: данные не являются массивом.</td></tr>';
            return;
        }

        if (data.length === 0) {
            tbody.innerHTML =
                '<tr><td colspan="4" class="text-center text-muted">Нет данных для отображения.</td></tr>';
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
    } catch (error) {
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
    }
}

// Show folders/files at the given path
function showFolders(path, addToHistoryFlag = true) {
    currentPath = [...path]; // Создаем копию массива
    currentTableId = null;
    const folderList = document.getElementById('folderList');
    const tableContainer = document.getElementById('tableContainer');

    if (!folderList) {
        console.error('folderList element not found');
        return;
    }

    folderList.innerHTML = '';
    tableContainer.classList.add('d-none');

    if (addToHistoryFlag) {
        addToHistory({ type: 'folder', path: [...path] });
    }

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
                button.textContent = window.i18n?.t('files.' + file.replace('.json', '')) || file;
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    showTable(file, true);
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
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showFolders([...path, item], true);
        });
        folderList.appendChild(button);
    });
    updateBreadcrumb();
}

// Show table for a file
function showTable(fileName, addToHistoryFlag = true) {
    // Не добавляем fileName в currentPath здесь
    currentTableId = fileName;
    const folderList = document.getElementById('folderList');
    const tableContainer = document.getElementById('tableContainer');

    if (!folderList || !tableContainer) {
        console.error('Required elements not found');
        return;
    }

    folderList.innerHTML = '';
    tableContainer.classList.remove('d-none');

    if (addToHistoryFlag) {
        addToHistory({ type: 'table', path: [...currentPath], fileName: fileName });
    }

    // Добавляем fileName в путь только для breadcrumb
    const tempPath = [...currentPath, fileName];
    const savedPath = currentPath;
    currentPath = tempPath;
    updateBreadcrumb();
    currentPath = savedPath;

    loadTableData(fileName);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    const initPromise = window.i18n?.ready || Promise.resolve();

    initPromise.then(() => {
        console.log('i18n ready, showing folders...');
        
        // Инициализируем с пустого пути
        showFolders([], true);

        // Настраиваем кнопки навигации
        const backBtn = document.getElementById('backBtn');
        const forwardBtn = document.getElementById('forwardBtn');
        
        if (backBtn) {
            backBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Back button clicked');
                goBack();
            });
        } else {
            console.error('Back button not found');
        }

        if (forwardBtn) {
            forwardBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Forward button clicked');
                goForward();
            });
        } else {
            console.error('Forward button not found');
        }

        // Настраиваем переключатели языка
        document.querySelectorAll('[data-lang]').forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const lang = item.getAttribute('data-lang');
                console.log('Language changed to:', lang);
                window.i18n?.setLanguage(lang);
            });
        });

        // Слушаем изменения языка
        window.i18n?.onLanguageChange(() => {
            console.log('Language changed, reloading...');
            showFolders(currentPath, false);
            if (currentTableId) {
                loadTableData(currentTableId);
            }
        });
    }).catch(error => {
        console.error('Initialization error:', error);
    });
});