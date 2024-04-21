import {test, expect} from "@playwright/test"

test('handle radio button', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await expect(page.locator("//input[@id='male']")).toBeVisible();
    await page.locator("//input[@id='male']").check();
    // await page.check("//input[@id='male']");

    await expect(await page.locator("//input[@id='male']").isChecked()); // boolean
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();

    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();
})