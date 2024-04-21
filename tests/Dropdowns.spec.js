import {test, expect} from "@playwright/test"
import { Stats } from "fs";

test('Handle dropdowns', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Multiple ways to select option from the dropdown

   // await page.locator('#country').selectOption({label:'India'}); // label / visible text
   // await page.locator('#country').selectOption('India'); // visible text 
   // await page.locator('#country').selectOption({value:'uk'}); // by value
   // await page.locator('#country').selectOption({index:1}); // by index
   // await page.selectOption("#country", 'India'); // by text without using locator 

      // Assertions on Dropdown
      //1) check number of options in dropdown - Approach 1
    //   const options1 = await page.locator('#country option');
    //   await expect(options1).toHaveCount(10);

     // 2) check number of options in dropdown - Approach 2
        //   const options2 =await page.$$('#country option');  // $$ return javascript array
        //   console.log("Number of options", options2.length);
        //   await expect(options2.length).toBe(10);

     // 3) check presence of value in the dropdown - Approach 1
        //  const content = await page.locator('#country').textContent();
        //  await expect(content.includes('India')).toBeTruthy();

     // 4) Check presence of value of in the dropdown - Approach 2 using loop
           // -- this approach is more useful for bootstrap
        //  const options = await page.$$('#country option') // its return javascript array       
        // let status = false;
        //  for(const option of options)
        //  {
        //     // console.log( await option.textContent());
        //     let value = await option.textContent();
        //     if(value.includes('France'))
        //     {
        //          status = true;
        //          await page.locator('#country').selectOption('France');
        //          break;    
        //     }
        //  }
        //  await expect(status).toBeTruthy();


        // 5) select option from dopdown using for loop
         const options = await page.$$('#country option') // its return javascript array       
          for(const option of options)
          {
             // console.log( await option.textContent());
             let value = await option.textContent();
             if(value.includes('France'))
             {
                  await page.selectOption('#country', value);
                  break;    
             }
          }
         await page.waitForTimeout(5000);


})