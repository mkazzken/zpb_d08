// Load JSON data for the table
fetch('./data/zbp_d08.json')
    .then(r => {
        if (!r.ok) {
            throw new Error(`HTTP error! status: ${r.status}`);
        }
        return r.json();
    })
    .then(data => {
        const tbody = document.querySelector('#dsoTable tbody');
        if (!tbody) {
            console.error('Table tbody not found');
            return;
        }
        tbody.innerHTML = '';
        data.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${item.field || ''}</td><td>${item.description || ''}</td><td>${item.value_example || ''}</td><td>${item.notes || ''}</td>`;
            tbody.appendChild(tr);
        });
    })
    .catch(error => {
        console.error('Error loading data:', error);
        const tbody = document.querySelector('#dsoTable tbody');
        if (tbody) {
            tbody.innerHTML = '<tr><td colspan="4" class="text-center text-danger">Ошибка загрузки данных.</td></tr>';
        }
    });