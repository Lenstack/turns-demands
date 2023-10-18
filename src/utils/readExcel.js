const xlsx = require('xlsx');
const readExcel = async (filePath) => {
    try {
        // Read the Excel file
        const workbook = await xlsx.readFile(filePath);
        // Get the first sheet of the Excel workbook
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Parse the sheet data to JSON format
        return xlsx.utils.sheet_to_json(sheet);
    } catch (error) {
        console.error('Error reading Excel file:', error.message);
        return null;
    }
}