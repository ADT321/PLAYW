import { test } from "@playwright/test";
//import LoginPage from "../pages/loginPage";
//import{decrypt, encrypt} from "../utils/CryptojsUtil";
import logger from "../utils/LoggerUtil";
import HomePage from "../pages/HomePage";
import cdata from "../testdata/datademo.json";
import { demoOutput } from "../utils/fakersample";
import { exportToCsv, exportToJson, generateTestData } from "../utils/FakerDataUtil";


for (const contact of cdata){
test(`Advance DD test for ${contact.firstName} `, async({page}) => {
    logger.info("Test for contact creation is started ...");
   
   // const loginPage = new LoginPage(page);
   // await loginPage.navigateToLoginPage();
   // await loginPage.fillUsername("adnantariq8383.ce692df82175@agentforce.com");
   // await loginPage.fillPassword("Automation321");
  //  await loginPage.fillUsername(process.env.userid!);
  //  await loginPage.fillPassword(process.env.password!);


   // const homePage = await loginPage.clickLoginButton();
   // await homePage.expectServiceTitleToBeVisible();
   // logger.info("Test for login and home page is completed");
   await page.goto(process.env.orgUrl!);

    const homePage = new HomePage(page);
    await homePage.expectServiceTitleToBeVisible(); 
   const contactsPage = await homePage.navigateToContactTab();
   logger.info("contact tab is loaded");
   await contactsPage.createNewContact(contact.firstName, contact.lastName);
   await contactsPage.expectContactLabelContainsFirstNameAndLastName(contact.firstName, contact.lastName);
   logger.info("Test for contact creation is completed");

});}
//test.skip("demo faker", async () => {
   // console.log(demoOutput)

//});

//test.skip ("Faker", async({page}) => {
    //Generate Test Data
   // const testData = generateTestData(20);
    //Export Data to Json File
   // exportToJson(testData, 'testData_en.json');
    //Export Data to CSV File
  //  exportToCsv(testData, 'testData_en.csv');
//});
