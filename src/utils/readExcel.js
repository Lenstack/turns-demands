const xlsx = require('xlsx');
//TODO: Write the logic to read the excel file
const readExcel = (file) => {
    const workbook = xlsx.readFile(file);
    const sheetName = workbook.SheetNames[0];

    const sheet = workbook.Sheets[sheetName];
    return xlsx.utils.sheet_to_json(sheet); // return a json object of the excel file
}