// Function to load JSON data for a table
function loadTableData(tableId, jsonPath) {
    fetch(jsonPath)
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
            
            // Clear existing content
            tbody.innerHTML = '';
            
            // Populate table with data
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

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load data for both tables
    loadTableData('dsoTable', './data/zbp_d08.json');
    loadTableData('dsoTable2', './data/zbp_test1.json');
});