import { test } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import{decrypt, encrypt} from "../utils/CryptojsUtil";
import logger from "../utils/LoggerUtil";

test("test", async({page}) => {

    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
   // await loginPage.fillUsername("adnantariq8383.ce692df82175@agentforce.com");
   // await loginPage.fillPassword("Automation321");
    await loginPage.fillUsername(process.env.userid!);
    await loginPage.fillPassword(process.env.password!);


    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
    logger.info("Test for login and home page is completed");

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