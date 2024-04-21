import {test, expect} from "@playwright/test"

test('AssertionTest', async ({page})=>{
     
      // open app url
    await page.goto('https://demo.nopcommerce.com/register');

    // 1) exepect(page).toHaveURL();     page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // 2) expect(page).toHaveTitle()     page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // 3) expect(locator).toBeVisible()   Element is visible
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible();

    // 4) expect(locator).toEnabled()       	Control is enabled
    const searchbox = await page.locator('#small-searchterms');
    await expect(searchbox).toBeEnabled();

    // 5) expect(locator).toBeChecked       	Radio/Checkbox is checked

       // RadioButton
       const maleRadioButton = await page.locator('#gender-male');
       await maleRadioButton.click();  // selecr radio button

       await expect(maleRadioButton).toBeChecked();

       // Checkbox
       const checkbox = await page.locator('#Newsletter');
       await expect(checkbox).toBeChecked();

       // 6) expect(locator).toBeHaveAttribute 	Element has attribute
       const submit_button = await page.locator('#register-button');
       await expect(submit_button).toHaveAttribute('type', 'submit');

       // 7) expect(locator).toHaveText()         Element matches text
       const page_title = await page.locator('.page-title h1');
      await expect(page_title).toHaveText('Register');

      // 8) expect(locator).toContainText()         Element contains text
        const page_title1 = await page.locator('.page-title h1');
        await expect(page_title1).toContainText('Reg');

      // 9) expect(locator).toHaveValue(value)       Input has value
           const email = await page.locator('#Email');
           await email.fill('onkar@gmail.com');
           await expect(email).toHaveValue('onkar@gmail.com');

       // 10) expect(locator).toHaveCount()       List of elements has given length  
          const options = await page.locator("select[name='DateOfBirthDay'] option");
          await expect(options).toHaveCount(32);
              
})