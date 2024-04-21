import {test, expect} from "@playwright/test"
import { waitForDebugger } from "inspector";

test('handle dropdown', async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);

    // Assertions
    // 1) check number of options in dropdown
    // const option = await page.locator('#colors option');
    // await expect(option).toHaveCount(5);

    // 2) check number of options in dropdown using javaScript Array
    // const option = await page.$$('#colors option');
    // // console.log('Number of options', option.length );
    // await expect(option.length).toBe(5);

    // 3) check presence of value in the dropdown
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();

    await page.waitForTimeout(5000);
})