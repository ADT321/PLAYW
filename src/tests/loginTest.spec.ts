import { test } from "@playwright/test";
import LoginPage from "../pages/loginPage";

test("test", async({page}) => {

    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("adnantariq8383.ce692df82175@agentforce.com");
    await loginPage.fillPassword("Automation321");

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();

}
 );