import {test, expect} from "@playwright/test"

test('test', async ({ page })=>{

    await page.goto('https://demoblaze.com/')
    await page.locator('//a[@id="login2"]').click();
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.getByRole('button', {name: 'Log in'}).click();

})