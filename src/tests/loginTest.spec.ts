import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import{decrypt, encrypt} from "../utils/CryptojsUtil";
import logger from "../utils/LoggerUtil";

//test("test", async({page}) => {

    //const loginPage = new LoginPage(page);
    //await loginPage.navigateToLoginPage();
   // await loginPage.fillUsername("adnantariq8383.ce692df82175@agentforce.com");
   // await loginPage.fillPassword("Automation321");
    //await loginPage.fillUsername(process.env.userid!);
    //await loginPage.fillPassword(process.env.password!);


    //const homePage = await loginPage.clickLoginButton();
   // await homePage.expectServiceTitleToBeVisible();
    //logger.info("Test for login and home page is completed");

//});
test("login with Auth file", async ({page}) =>{
    await page.goto(process.env.orgUrl!);
    logger.info("Home page is landed");
    await expect(page.getByRole("link", { name : "Accounts" })).toBeVisible();
    logger.info("Accounts title is available");
       
   await expect(page.getByRole('link', { name: 'Contacts' })).toBeVisible();
   logger.info("contacts is visible");
  await page.getByRole('link', { name: 'Contacts' }).click();
  await page.getByRole('link', { name: 'playwrightt recordingg' }).click();
  
  await page.getByLabel('Cases').getByRole('button', { name: 'New' }).click();
  await page.getByRole('combobox', { name: 'Status' }).click();
  await page.locator('span').filter({ hasText: 'Working' }).first().click();
  await page.getByRole('combobox', { name: 'Case Origin' }).click();
  await page.getByText('Web', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('case three');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('with recording three');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.getByText('Case "00001028" was created.', { exact: true }).click();
  await page.getByLabel('Cases').getByRole('link', { name: '00001028' }).click();
  logger.info("Newly created case is available and clicked");
});



//test.skip("Sample env test", async({page}) => {
  // console.log(process.env.NODE_ENV);
    //console.log(process.env.userid);
    //console.log(process.env.password);
//});

//test.skip("Sample env test", async({page}) => {
   // const plainText = 'Hello Mars!';
    //const encryptedText = encrypt(plainText);
    //console.log('SALT:',process.env.SALT);
   // console.log('EncryptedTxt:',encryptedText);
   // const decryptedText = decrypt(encryptedText);
    //console.log('DecryptedTxt:', decryptedText);
//});