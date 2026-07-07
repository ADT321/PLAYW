import { test, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";
import HomePage from "../pages/HomePage";

test.skip('screen shot compare', async({page}) => {
    await page.goto('/');
await expect(page).toHaveScreenshot();
});

test('homepage ss compare', async({page}) => {
    await page.goto(process.env.orgUrl!);
await expect(page).toHaveScreenshot();
});