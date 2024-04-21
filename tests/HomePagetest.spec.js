const {test, expect} = require('@playwright/test')

test('Home Page', async ({page})=>{

    await page.goto('https://demoblaze.com/');

    const pageTitle = page.title();
    console.log('page title is:', pageTitle);

    const pageURL = page.url();
    console.log('page url is:', pageURL);

    await expect(page).toHaveTitle('STORE');

    await expect(page).toHaveURL('https://demoblaze.com/');

    await page.close();

})