// Function to populate table
function populateTable(tableId, data) {
    const tbody = document.querySelector(`#${tableId} tbody`);
    if (!tbody) {
        console.error(`Table tbody for ${tableId} not found`);
        return;
    }
    tbody.innerHTML = '';
    
    // Validate data
    if (!data || !Array.isArray(data)) {
        console.error(`Invalid data for ${tableId}:`, data);
        tbody.innerHTML = '<tr><td colspan="4" class="text-center text-danger">Ошибка: данные не являются массивом.</td></tr>';
        return;
    }
    
    if (data.length === 0) {
        console.warn(`No data to display for ${tableId}`);
        tbody.innerHTML = '<tr><td colspan="4" class="text-center text-muted">Нет данных для отображения.</td></tr>';
        return;
    }
    
    data.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${item.field || ''}</td><td>${item.description || ''}</td><td>${item.value_example || ''}</td><td>${item.notes || ''}</td>`;
        tbody.appendChild(tr);
    });
    
    console.log(`Successfully populated ${tableId} with ${data.length} rows`);
}

// Load JSON data for ZBP_D08 table
fetch('./data/zbp_d08.json')
    .then(r => {
        console.log('ZBP_D08 fetch response:', r);
        if (!r.ok) {
            throw new Error(`HTTP error! status: ${r.status}`);
        }
        return r.json();
    })
    .then(data => {
        console.log('ZBP_D08 data loaded:', data);
        populateTable('dsoTable', data);
    })
    .catch(error => {
        console.error('Error loading ZBP_D08 data:', error);
        const tbody = document.querySelector('#dsoTable tbody');
        if (tbody) {
            tbody.innerHTML = '<tr><td colspan="4" class="text-center text-danger">Ошибка загрузки данных ZBP_D08.</td></tr>';
        }
    });

// Load JSON data for ZBP_Test table
fetch('./data/zbp_test.json')
    .then(r => {
        console.log('ZBP_Test fetch response:', r);
        if (!r.ok) {
            throw new Error(`HTTP error! status: ${r.status}`);
        }
        return r.json();
    })
    .then(data => {
        console.log('ZBP_Test data loaded:', data);
        populateTable('testTable', data);
    })
    .catch(error => {
        console.error('Error loading ZBP_Test data:', error);
        const tbody = document.querySelector('#testTable tbody');
        if (tbody) {
            tbody.innerHTML = '<tr><td colspan="4" class="text-center text-danger">Ошибка загрузки данных ZBP_Test.</td></tr>';
        }
    });