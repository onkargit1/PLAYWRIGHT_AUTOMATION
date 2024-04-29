import {expect, test} from "@playwright/test"
// import { users_data} from{testsnew/testdata.json}
// const users_data = JSON.parse(JSON.stringify(require("testsnew/testdata.json")))
test.describe('data driven test', ()=>{

    // const users_data = [{
    // }]
    const fs = require('fs');
    const users_data = JSON.parse(fs.readFileSync('testsnew/testdata.json'));

    users_data.forEach(data => {
        
    //  test(`create users ${data[0]}`, async({ page }) =>{

    //         await page.goto("https://demoqa.com/webtables");
    //         await expect(page).toHaveTitle('DEMOQA');

    //         await page.locator('#addNewRecordButton').click();
    //         await page.getByPlaceholder("First Name").fill();
    //         await page.getByPlaceholder("Last Name").fill();
    //         await page.getByPlaceholder("name@example.com").fill();
    //         await page.locator("id='salary'").fill();
    //         await page.locator("id='department'").fill();
    //         await page.locator("//button[normalize-space()='Submit'])[1]").click();
    //     })
    });
})