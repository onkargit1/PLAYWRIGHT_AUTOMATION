import {test,expect} from "@playwright/test"

test('handle inputbox', async({page})=>{

  await page.goto('https://testautomationpractice.blogspot.com/');

  await expect(page.locator("//input[@id='name']")).toBeVisible();
  await expect(page.locator("//input[@id='name']")).toBeEmpty();
  await expect(page.locator("//input[@id='name']")).toBeEditable();
  await expect(page.locator("//input[@id='name']")).toBeEnabled();

  await page.locator("//input[@id='name']").fill('john');
//   await page.fill("//input[@id='name']", 'john');

await page.waitForTimeout(2000);


})
