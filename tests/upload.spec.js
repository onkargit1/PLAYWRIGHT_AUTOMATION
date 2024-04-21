import {test, expect} from "@playwright/test"

test('Single File', async({page}) =>{
  
    await page.goto('https://tus.io/demo');

    await page.waitForSelector("//input[@id='P0-0']");

    await page.locator("//input[@id='P0-0']").click();

    await page.locator("//input[@id='P0-0']").setInputFiles('tests/uploadFiles/PDF File 1.pdf')

    await page.waitForTimeout(5000)

})

test.only('Multiple File', async ({page}) =>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator('#filesToUpload').setInputFiles(['tests/uploadFiles/New Microsoft Word Document.docx',
      'tests/uploadFiles/PDF File 1.pdf']) 

     expect(await page.locator("#fileList li:nth-child(1)")).toHaveText('New Microsoft Word Document.docx');
     expect(await page.locator("#fileList li:nth-child(2)")).toHaveText('PDF File 1.pdf');

     // Removing Files

     await page.locator('#filesToUpload').setInputFiles([]) 
     expect(await page.locator("#fileList li:nth-child(1)")).toHaveText('No Files Selected');




    await page.waitForTimeout(5000);


})