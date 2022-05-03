//Pull all the required functions from node_modules.
const { WebElement } = require("selenium-webdriver");
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
let should = require('chai').should();


describe('Fill all required fields', function(){
it('Successfully add a data to the fields',async function(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://demoqa.com/text-box');

    await driver.findElement(By.id('userName')).sendKeys('Ani');
    await driver.findElement(By.id('userEmail')).sendKeys('ani@gmail.com');
    await driver.findElement(By.id('currentAddress')).sendKeys('Sayat-Nova,40');
    await driver.findElement(By.id('permanentAddress')).sendKeys('Sayat-Nova, 40');

    let Element = driver.findElement(By.id("submit"));
        
    driver.executeScript("arguments[0].scrollIntoView(true);",Element);
     await driver.findElement(By.id("submit")).click();
     
     await driver.findElement(By.id("output")).isDisplayed(true);
    
    //assertions
     let name=await driver.findElement(By.id('name')).getText().then(function(value){
        return value
    });
    let email=await driver.findElement(By.id('email')).getText().then(function(value){
        return value
    });
    
     name.should.equal("Name:"+'Ani');
     email.should.equal("Email:"+ 'ani@gmail.com');
     

     //Close the browser
     await driver.quit();


    });



});
