// const {test, expect} = require('@playwright/test')

import {test, expect} from '@playwright/test'


test('Locators', async ({page})=>{
       
    await page.goto('https://demoblaze.com/');

    // click on login button

    // await page.locator('id=login2').click();
    await page.click('id=login2');

    // provide username - CSS
    //await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername', 'pavanol')
    // await page.type('#loginusername')

    // provide password -css
    await page.fill("input[id='loginpassword']", 'test@123')

    // click on login button
    await page.click("//button[normalize-space()='Log in']")

    // verify logout link presense
    const loggedout_link = page.locator("//a[normalize-space()='Log out']");

    await expect(loggedout_link).toBeVisible();

    await page.close();


})

