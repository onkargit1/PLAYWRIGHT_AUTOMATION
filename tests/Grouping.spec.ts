import {test, expect} from "@playwright/test"


test.beforeAll(async()=>{

    console.log('this is a beforeAll Hooks....');
})

test.afterAll(async()=>{
    console.log('this is after all Hooks....');
})

test.beforeEach(async()=>{
    console.log('this is beforeEach Hooks....');
})

test.afterEach(async ()=>{
    console.log('this is afterEach Hooks....');
})



test.describe.only('Group1', async ()=>{

    test('Test1', async({page})=>{

        console.log('This is my test 1');
     })
     
     test('Test2', async({page})=>{
     
         console.log('This is my test 1');
      })

})

test.describe('Group2', async ()=>{

    test('Test3', async({page})=>{

        console.log('This is my test 1');
     })
    
     test('Test4', async({page})=>{
    
        console.log('This is my test 1');
     })
})



 