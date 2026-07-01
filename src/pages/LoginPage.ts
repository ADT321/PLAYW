import { Page } from "@playwright/test";
import HomePage from "./homePage";
import logger from "../utils/LoggerUtil";

export default class LoginPage {
    private readonly usernameInputSelector = "#username";
    private readonly passwordInputSelector = "#password009";
    private readonly loginbuttonSelector = "#Login";
    
    
    constructor (private page: Page) {
            }
async navigateToLoginPage(){
    await this.page.goto("/");
    logger.info('Navigated to Login page');
}
async fillUsername(username: string){
    await this.page.locator(this.usernameInputSelector).fill(username);
     logger.info('Username is entered');    
}
async fillPassword(password: string){
    await this.page.locator(this.passwordInputSelector).fill(password);            
    logger.info('Password is Entered')
}
async checkRememberMe(){
        await this.page.getByLabel('Remember me').check();
        logger.info('check box is checked');
    }

async clickLoginButton(){
    await this.page.locator(this.loginbuttonSelector).click()
    .catch((error) => {
        logger.error('Error clicking login button : ${error}');
        throw error;
    }).then(() =>logger.info("login button is clicked"));

const homePage = new HomePage(this.page);
return homePage;
}
}

