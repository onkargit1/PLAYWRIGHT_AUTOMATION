import { test, expect} from "@playwright/test"

test.skip('Alert with OK', async ({ page })=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enable Dialog window handler
    page.on('dialog', async dialog=> {

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.locator("//button[normalize-space()='Alert']").click();
    await page.waitForTimeout(5000);
})

test.skip('Confirmation Dialog-Alert with OK and cancel', async ({ page })=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enable Dialog window handler
    page.on('dialog', async dialog=> {

        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); // close by using OK Button
        // await dialog.dismiss(); // close by using cancel button
    })

    await page.locator("//button[normalize-space()='Confirm Box']").click();
    await expect(await page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);
})

test('Prompt Dialog', async ({ page })=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enable Dialog window handler
    page.on('dialog', async dialog=> {

        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');

        await dialog.accept('John'); // close by using OK Button
        // await dialog.dismiss(); // close by using cancel button
    })

    await page.locator("//button[normalize-space()='Prompt']").click();
    await expect(await page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?');
    await page.waitForTimeout(5000);
})