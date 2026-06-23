import { Page } from "@playwright/test";
import HomePage from "./homePage";

export default class LoginPage {
    private readonly usernameInputSelector = "#username";
    private readonly passwordInputSelector = "#password";
    private readonly loginbuttonSelector = "#Login";
    
    
    constructor (private page: Page) {
            }
async navigateToLoginPage(){
    await this.page.goto("/");
}
async fillUsername(username: string){
    await this.page.locator(this.usernameInputSelector).fill(username);
    }
async fillPassword(password: string){
    await this.page.locator(this.passwordInputSelector).fill(password);            
}
async checkRememberMe(){
        await this.page.getByLabel('Remember me').check();}

async clickLoginButton(){
    await this.page.locator(this.loginbuttonSelector).click()
    .catch((error) => {
        console.error(`Error clicking login button: ${error}`);
        throw error;
    })
const homePage = new HomePage(this.page);
return homePage;
}
}

