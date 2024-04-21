import { test, expect} from "@playwright/test"

test('Test1', async ({ page }) =>{

    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
})

test('Test2', async ({ page }) => {

    await page.goto('https://www.opencart.com/index.php?route=cms/demo');
    await expect(page).toHaveTitle('OpenCart - Demo');
})


test('Test3', async ({ page }) => {

    await page.goto('https://www.nopcommerce.com/en/demo');
    await expect(page).toHaveTitle('No commerce');
})