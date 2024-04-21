import {test, expect} from "@playwright/test"

test('Mouse Right Click', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo/on-dom-element.html');

   const button = await page.locator("//span[normalize-space()='right click me 1']")

   // right click action 
    await button.click({button: 'right'})

    await page.waitForTimeout(4000);
})