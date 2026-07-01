import * as fs from 'fs';
import path from 'path';

const CSVToJSON = (data: string, delimiter = ',') => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    return data
        .slice(data.indexOf('\n') + 1)
        .split('\n')
        .map((v) => {
            const values = v.split(delimiter);
            return titles.reduce(
                (obj, title, index) => ((obj[title.trim()] = values[index].trim()), obj),
                {}
            );
        });
};

// console.log(CSVToJSON('col1,col2\na,b\nc,d'));
// Example usage
const currentDir = __dirname;
// Go one level above (back to 'src')
const srcDir = path.resolve(currentDir, "..");
// Change to 'testdata' folder
const testdataDir = path.resolve(srcDir, "testdata");
const csvFilePath = `${testdataDir}`;

export const convertCsvFileToJsonFile = (csvFileName: string, jsonFileName: string, delimiter = ',') => {
    try {
        // Read the CSV file
        const csvFilePathFull = path.join(csvFilePath, csvFileName);
        const data = fs.readFileSync(csvFilePathFull, 'utf8');

        // Convert CSV to JSON
        const jsonData = CSVToJSON(data, delimiter);

        // Write the JSON data to a file
        const jsonFilePathFull = path.join(csvFilePath, jsonFileName);
        fs.writeFileSync(jsonFilePathFull, JSON.stringify(jsonData, null, 2), 'utf8');

        console.log(`CSV file successfully converted to JSON and saved at ${jsonFilePathFull}`);
    } catch (error) {
        console.error(`Error converting CSV to JSON: ${error}`);
        throw error;
    }
};