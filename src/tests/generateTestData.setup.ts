import { convertCsvFileToJsonFile } from "../utils/CsvtoJsonUtil";

convertCsvFileToJsonFile("data.csv", "datademo.json");
console.log("datademo.json generated successfully");