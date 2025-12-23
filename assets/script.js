// Folder structure
const folderStructure = {
    'BP3_balance': [
        'Баланс исполнения',
        'bp3-p-pk',
        'bp3-q-pk',
        'bp3-dzo'
    ],

    'BP4_dds': [
        'bp4-p-pk',
        'bp4-q-pk',
        'bp4-dzo'
    ],

    'BP6_TFR': [
        'bp6-p-pk',
        'bp6-q-pk',
        'bp6-m-pk',
        'bp6-dzo'
    ]
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
        let translatedPart;
        if (isLast && currentTableId) {
            // This is a file
            translatedPart = window.i18n?.t('files.' + part) || part;
        } else {
            // This is a folder
            translatedPart = window.i18n?.t('folders.' + part) || part;
        }
        if (isLast) {
            breadcrumbHTML += `<li class="breadcrumb-item active" aria-current="page">${translatedPart}</li>`;
        } else {
            breadcrumbHTML += `<li class="breadcrumb-item"><a href="#" data-path-index="${index}">${translatedPart}</a></li>`;
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
        if (folderStructure[main].includes(fileName)) {
            return main;
        }
    }
    return '';
}

// Load JSON data for a table from embedded data (no HTTP / fetch)
function loadTableData(fileName) {
    const lang = getLang();
    let mainFolder = currentPath[0]; // Теперь path - это просто mainFolder
    if (!mainFolder) {
        mainFolder = findPath(fileName);
    }
    console.log('Loading', fileName, 'mainFolder:', mainFolder, 'currentPath:', currentPath);

    try {
        if (!window.EMBEDDED_DATA) {
            throw new Error('EMBEDDED_DATA is not available');
        }

        if (!mainFolder) {
            throw new Error(`Не найден раздел для файла: "${fileName}"`);
        }

        const data =
            window.EMBEDDED_DATA?.[lang]?.[mainFolder]?.[fileName];

        if (!data) {
            throw new Error(
                `Данные не найдены для ${lang}/${mainFolder}/${fileName}`
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
        // Files in the main folder
        const mainFolder = path[0];
        if (folderStructure[mainFolder]) {
            items = folderStructure[mainFolder];
            // Show files as buttons to load tables
            items.forEach(file => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'list-group-item list-group-item-action';
                button.textContent = window.i18n?.t('files.' + file) || file;
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