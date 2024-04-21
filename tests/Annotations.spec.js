import {test, expect} from '@playwright/test'

// only
// test('test1', async ({page})=>{
 
//     console.log('this is test1');
// })

// test.skip('test2', async ({page})=>{
 
//     console.log('this is test2');
// })

// skip using add condition
// test('test3', async ({page, browserName})=>{
 
//     if(browserName === 'chromium')
//     {
//         test.skip()
//        console.log('this is test3');
//     }
// })

// Fixme
// test('test4', async({page})=>{

//      test.fixme();
//      console.log('this is test4...');
// })

// fail
// test('test5', async ({page})=>{

//        test.fail(); // expec
//        console.log('this is test5');
//        await expect(1).toBe(1);

// })

// slow
test('test6', async ({page})=>{

       test.slow();
    // test.setTimeout(5000);
       await page.goto('https://testautomationpractice.blogspot.com/');
       console.log('this is test 6');
})