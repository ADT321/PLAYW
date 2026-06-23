// @ts-check

const {test} = require("@playwright/test")

test('validate title', async({page}) =>{

await page.goto('https://opensource-demo.orangehrmlive.com/');
await expect(page).tohavetitle





})