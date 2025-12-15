// Table configuration
const tables = [
    { id: 'dsoTable', cardId: 'card-dsoTable', name: 'ZBP_D08', jsonPath: './data/zbp_d08.json' },
    { id: 'dsoTable2', cardId: 'card-dsoTable2', name: 'ZBP_TEST1', jsonPath: './data/zbp_test1.json' }
];

// Function to update breadcrumb based on selected table
function updateBreadcrumb(tableName = '') {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;

    breadcrumb.innerHTML = `
        <li class="breadcrumb-item"><a href="https://sk.kz/">Главная</a></li>
        <li class="breadcrumb-item${tableName ? '' : ' active'}" ${tableName ? '' : 'aria-current="page"'}>${tableName ? '<a href="#" id="breadcrumb-doc-link">Документация API</a>' : 'Документация API'}</li>
        ${tableName ? `<li class="breadcrumb-item active" aria-current="page">${tableName}</li>` : ''}
    `;

    // Allow returning to the start (list view) without page reload
    const docLink = document.getElementById('breadcrumb-doc-link');
    if (docLink) {
        docLink.addEventListener('click', (event) => {
            event.preventDefault();
            showList();
        });
    }
}

// Function to load JSON data for a table
function loadTableData(tableId, jsonPath) {
    return fetch(jsonPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const tbody = document.querySelector(`#${tableId} tbody`);
            if (!tbody) {
                console.error(`Table tbody not found for ${tableId}`);
                return;
            }
            
            tbody.innerHTML = '';
            
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
            
            console.log(`Successfully loaded ${data.length} rows into ${tableId}`);
        })
        .catch(error => {
            console.error(`Error loading data for ${tableId}:`, error);
            const tbody = document.querySelector(`#${tableId} tbody`);
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
    showTable(null);
    updateBreadcrumb();
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set default breadcrumb
    updateBreadcrumb();

    // Set up table list click handling
    const list = document.getElementById('tableList');
    if (list) {
        list.addEventListener('click', (event) => {
            const item = event.target.closest('[data-table-id]');
            if (!item) return;

            const tableId = item.getAttribute('data-table-id');
            const config = tables.find(t => t.id === tableId);
            if (!config) return;

            showTable(config.cardId);
            updateBreadcrumb(config.name);

            // Lazy-load data (only first time)
            if (!config.loaded) {
                loadTableData(config.id, config.jsonPath).then(() => {
                    config.loaded = true;
                });
            }
        });
    }
});