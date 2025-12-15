# API Documentation Data Upload Guide

This guide explains how to upload and manage data for the API Documentation project. The project displays API field descriptions from JSON data files.

## Project Overview

The API Documentation site renders tables from JSON files located in the `data/` directory. Each table corresponds to a specific API endpoint or data structure.

## Data Structure

All data files are JSON arrays containing objects with the following structure:

```json
[
  {
    "field": "FieldName",
    "description": "Human-readable description of the field",
    "value_example": "Sample value or format",
    "notes": "Optional additional notes"
  }
]
```

### Field Descriptions:
- `field` (string): Technical field name
- `description` (string): Human-readable description
- `value_example` (string): Example value or format
- `notes` (string): Optional remarks (can be empty)

## How to Upload New Data

### Step 1: Prepare Your Data
1. Create a JSON file following the structure above
2. Ensure all required fields are present
3. Validate the JSON format (use a JSON validator if needed)

### Step 2: Add the JSON File
1. Place your JSON file in the appropriate `data/` subdirectory:
   - `data/` - for main tables
   - `data/kz/` - for Kazakh language versions
   - `data/ru/` - for Russian language versions
2. Use lowercase filenames with underscores, e.g., `my_new_table.json`

### Step 3: Register the Table in the Interface
1. Open `index.html`
2. In the `#tableList` section, add a new button:
   ```html
   <button type="button" class="list-group-item list-group-item-action" data-table-id="myNewTable">MY NEW TABLE</button>
   ```

### Step 4: Add the Table Display Card
1. Still in `index.html`, add a new card block after the existing ones:
   ```html
   <div class="card mb-4 d-none" id="card-myNewTable">
     <div class="card-header">
       <h3 class="mb-0">MY NEW TABLE</h3>
     </div>
     <div class="card-body">
       <div class="table-responsive">
         <table id="myNewTable" class="table table-striped table-bordered table-hover">
           <thead>
             <tr>
               <th data-i18n="tableHeaders.field">Поле</th>
               <th data-i18n="tableHeaders.description">Описание</th>
               <th data-i18n="tableHeaders.valueExample">Пример значения</th>
               <th data-i18n="tableHeaders.notes">Примечание</th>
             </tr>
           </thead>
           <tbody></tbody>
         </table>
       </div>
     </div>
   </div>
   ```

### Step 5: Configure the JavaScript
1. Open `assets/script.js`
2. Add an entry to the `tables` array:
   ```javascript
   { id: 'myNewTable', cardId: 'card-myNewTable', name: 'MY NEW TABLE', jsonPath: './data/my_new_table.json' }
   ```

## Updating Existing Data

### Method 1: Direct File Edit
1. Locate the JSON file in `data/`, `data/kz/`, or `data/ru/`
2. Edit the file directly with your changes
3. Save the file
4. Refresh the browser to see changes

### Method 2: Replace Entire File
1. Prepare the updated JSON file locally
2. Replace the existing file in the appropriate directory
3. Ensure the filename matches exactly
4. Refresh the browser to see changes

## Data Validation

Before uploading, ensure your data:
- Is valid JSON (no syntax errors)
- Contains all required fields for each object
- Has consistent data types
- Uses UTF-8 encoding
- Follows the established naming conventions

## Localization Support

The project supports multiple languages:
- Russian (default): `data/`
- Kazakh: `data/kz/`
- Russian (alternative): `data/ru/`

When adding localized data, place files in the corresponding subdirectory and ensure the JSON structure matches.

## Troubleshooting

### Table Not Loading
- Check browser console for errors
- Verify JSON file path in `script.js`
- Ensure JSON is valid
- Confirm file permissions allow reading

### Data Not Displaying
- Check that all required fields are present
- Verify the table ID matches between HTML and JavaScript
- Ensure the card has `d-none` class initially

### Localization Issues
- Confirm files exist in correct language subdirectories
- Check that language switching works in the interface

## Best Practices

1. **Backup**: Always backup existing files before making changes
2. **Version Control**: Use Git to track changes to data files
3. **Validation**: Test JSON files before uploading
4. **Consistency**: Maintain consistent formatting across all data files
5. **Documentation**: Update this README when adding new data types or processes

## Quick Start for Data Upload

1. Prepare your JSON data file
2. Place it in `data/your_file.json`
3. Add button in `index.html`
4. Add card in `index.html`
5. Add entry in `assets/script.js`
6. Test by opening `index.html` and clicking your new button


