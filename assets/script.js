// Table configuration
const tables = [
    { id: 'dsoTable', cardId: 'card-dsoTable', nameKey: 'tables.dsoTable', fileName: 'dso_table', loadedByLang: {} },
    { id: 'dsoTable2', cardId: 'card-dsoTable2', nameKey: 'tables.dsoTable2', fileName: 'zbp_test1', loadedByLang: {} },
    { id: 'myTable', cardId: 'card-dsoTable3', nameKey: 'tables.dsoTable3', fileName: 'zbp_test', loadedByLang: {} }
];

let currentTableId = null;

function getLang() {
    return window.i18n?.currentLang || 'ru';
}

function getTableLabel(table) {
    const translated = window.i18n?.t(table.nameKey);
    return translated || table.id;
}

// Update breadcrumb based on selected table
function updateBreadcrumb(tableName = '') {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;

    const home = window.i18n?.t('breadcrumb.home') || 'Главная';
    const docs = window.i18n?.t('breadcrumb.docs') || 'Документация API';

    breadcrumb.innerHTML = `
        <li class="breadcrumb-item"><a href="https://sk.kz/">${home}</a></li>
        <li class="breadcrumb-item${tableName ? '' : ' active'}" ${tableName ? '' : 'aria-current="page"'}>${tableName ? `<a href="#" id="breadcrumb-doc-link">${docs}</a>` : docs}</li>
        ${tableName ? `<li class="breadcrumb-item active" aria-current="page">${tableName}</li>` : ''}
    `;

    const docLink = document.getElementById('breadcrumb-doc-link');
    if (docLink) {
        docLink.addEventListener('click', (event) => {
            event.preventDefault();
            showList();
        });
    }
}

// Load JSON data for a table
function loadTableData(table) {
    const lang = getLang();
    const jsonPath = `./data/${lang}/${table.fileName}.json`;
    return fetch(jsonPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const tbody = document.querySelector(`#${table.id} tbody`);
            if (!tbody) {
                console.error(`Table tbody not found for ${table.id}`);
                return;
            }

            tbody.innerHTML = '';

            if (!Array.isArray(data)) {
                console.error(`Invalid data for ${table.id}:`, data);
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

            console.log(`Successfully loaded ${data.length} rows into ${table.id} (${lang})`);
            table.loadedByLang[lang] = true;
        })
        .catch(error => {
            console.error(`Error loading data for ${table.id}:`, error);
            const tbody = document.querySelector(`#${table.id} tbody`);
            if (tbody) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="4" class="text-center text-danger">
                            Ошибка загрузки данных: ${error.message}
                        </td>
                    </tr>
                `;
            }
        });
}

// Show one table card and hide the others
function showTable(cardId) {
    tables.forEach(({ cardId: cId }) => {
        const cardEl = document.getElementById(cId);
        if (!cardEl) return;
        if (cardId && cId === cardId) {
            cardEl.classList.remove('d-none');
        } else {
            cardEl.classList.add('d-none');
        }
    });
}

// Show only the list (hide all tables) and reset breadcrumb
function showList() {
    currentTableId = null;
    showTable(null);
    updateBreadcrumb();
}

function updateTableTitles() {
    tables.forEach((table) => {
        const button = document.querySelector(`[data-table-id="${table.id}"]`);
        const header = document.querySelector(`#${table.cardId} h3`);
        const label = getTableLabel(table);
        if (button) button.textContent = label;
        if (header) header.textContent = label;
    });
}

function reloadCurrentTable() {
    if (!currentTableId) return;
    const tableCfg = tables.find((t) => t.id === currentTableId);
    if (!tableCfg) return;
    tableCfg.loadedByLang[getLang()] = false;
    loadTableData(tableCfg);
    updateBreadcrumb(getTableLabel(tableCfg));
}

document.addEventListener('DOMContentLoaded', function() {
    const initPromise = window.i18n?.ready || Promise.resolve();

    initPromise.then(() => {
        updateTableTitles();
        updateBreadcrumb();

        const list = document.getElementById('tableList');
        if (list) {
            list.addEventListener('click', (event) => {
                const item = event.target.closest('[data-table-id]');
                if (!item) return;

                const tableId = item.getAttribute('data-table-id');
                const config = tables.find(t => t.id === tableId);
                if (!config) return;

                currentTableId = config.id;
                showTable(config.cardId);
                updateBreadcrumb(getTableLabel(config));

                if (!config.loadedByLang[getLang()]) {
                    loadTableData(config);
                }
            });
        }

        document.querySelectorAll('[data-lang]').forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const lang = item.getAttribute('data-lang');
                window.i18n?.setLanguage(lang);
            });
        });

        window.i18n?.onLanguageChange(() => {
            updateTableTitles();
            tables.forEach((t) => { t.loadedByLang[getLang()] = false; });
            reloadCurrentTable();
        });
    });
});

