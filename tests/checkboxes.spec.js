import {test, expect} from "@playwright/test"

test("handle checkboxes", async ({page})=>{

       await page.goto('https://testautomationpractice.blogspot.com/');

       // single checkbox
        await page.locator("//input[@id='sunday']").check();

        expect(await page.locator("//input[@id='sunday']")).toBeChecked();
        expect(await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy();

        expect( await page.locator("//input[@id='monday']").isChecked()).toBeFalsy();

        // Multiple checkboxe

        const checkboxexLocators = [
            "//input[@id='sunday']",
            "//input[@id='monday']",
            "//input[@id='tuesday']"
        ];

        for(const locators of checkboxexLocators) // select multiple checkboxes
        {
            await page.locator(locators).check();
        }

        for(const locators of checkboxexLocators) // unsselect multiple checkboxes which are already selected
        {
            if( await page.locator(locators).isChecked())
            {
               await page.locator(locators).uncheck();
            }
        }

        await page.waitForTimeout(4000);
       
})