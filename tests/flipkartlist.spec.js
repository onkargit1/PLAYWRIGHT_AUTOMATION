import {test, expect} from "@playwright/test"

test('find the list item', async ({ page }) => {

     await page.goto('https://www.flipkart.com/?disp=1013403075337057225036018091353O402-GDN-Static&cmpid=sem_3856208402_Mobiles_dsa_goog&gad_source=1&gclid=CjwKCAjwoa2xBhACEiwA1sb1BKMri80YTIvyXtiUFU0SMtDwY9AbeCD0x9ZfjXA9AlVAjZ7GbOEnnxoC3sYQAvD_BwE { timeout: 50000}')

     const electronic = await page.locator("//span[contains(text(),'Electronics')]");

      await electronic.hover();
      const link = await page.$$("//div[@class='_16rZTH']//object//a");
      await typeof link;
      console.log(link.length);
      
      await page.waitForTimeout(4000);
      for(const links of link)
      {
        let value =  await links.textContent();
        
        console.log(value);
      }
     
       

})