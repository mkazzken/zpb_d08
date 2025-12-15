# API Docs - ZBP D08

Static HTML page that renders API field descriptions from JSON files under `data/`. Each table is driven by a JSON file and a small configuration in `assets/script.js`.

## Quick start
- Open `index.html` in a browser (double-click locally or serve via any static server).
- Ensure the relative folders `assets/` and `data/` stay beside `index.html`.

## Data format
Each dataset is a JSON array of rows:
```json
[
  {
    "field": "ZBPDATYPE",
    "description": "Тип данных /BIC/MZBPDATYPE",
    "value_example": "DT_3 — Оценка",
    "notes": ""
  }
]
```
Allowed keys per row:
- `field` (string) – technical field name.
- `description` (string) – human-readable description.
- `value_example` (string) – sample value.
- `notes` (string) – optional remark (can be empty).

## How to add a new dataset/table
1) Add JSON file  
   - Place the file in `data/`, e.g. `data/my_table.json`.  
   - Follow the array-of-objects format shown above.

2) Register it in the tables list (left buttons)  
   - In `index.html`, inside the `#tableList` section, add a button similar to:
   ```html
   <button type="button" class="list-group-item list-group-item-action" data-table-id="myTable">MY_TABLE</button>
   ```

3) Add a card for the table content  
   - Still in `index.html`, duplicate an existing card block (e.g. `card-dsoTable`) and update ids/names:
   ```html
   <div class="card mb-4 d-none" id="card-myTable">
     <div class="card-header">
       <h3 class="mb-0">MY_TABLE</h3>
     </div>
     <div class="card-body">
       <div class="table-responsive">
         <table id="myTable" class="table table-striped table-bordered table-hover">
           <thead>
             <tr>
               <th>Поле</th>
               <th>Описание</th>
               <th>Пример значения</th>
               <th>Примечание</th>
             </tr>
           </thead>
           <tbody></tbody>
         </table>
       </div>
     </div>
   </div>
   ```

4) Wire it up in `assets/script.js`  
   - Add an entry to the `tables` array:
   ```js
   { id: 'myTable', cardId: 'card-myTable', name: 'MY_TABLE', jsonPath: './data/my_table.json' }
   ```

5) Verify  
   - Open `index.html`, click the new button, confirm rows load.  
   - If the table stays empty, check the browser console for JSON path or format errors.

## Updating existing data
- Edit the corresponding JSON in `data/`.  
- Keep the schema the same; missing keys render as empty cells.  
- No page reload is needed beyond refreshing the browser tab.


