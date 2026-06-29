import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    await page.goto('https://login.salesforce.com/');
    await page.locator('#username').fill(process.env.userid!);
    await page.locator('#password').fill(process.env.password!);
    await page.getByLabel('Remember me').check();
    await page.locator('#Login').click();

    // First run only: this pauses execution and opens the Playwright Inspector,
    // giving you a live browser window to manually enter the emailed code.
    await page.pause();

    // Once you've manually verified and the home page has loaded, save the session.
    await page.context().storageState({ path: authFile });
});