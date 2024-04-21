import {test, expect} from "@playwright/test"

test('Mouse Double Click', async ({ page })=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const btnCopy = await page.locator("//button[normalize-space()='Copy Text']");

    // doubleClick
    await btnCopy.dblclick();

    const f2 = await page.locator('#field2');   // css selector

    await expect(f2).toHaveValue("Hello World!");

    await page.waitForTimeout(4000);
})