import {Given, When, Then} from "@wdio/cucumber-framework";
import chai from 'chai';


Given(/^Google page is opened$/, async function () {
    await browser.url('https://www.google.com');
    await browser.pause(1000);

});
When(/^I agree to the cookie policy$/, async function () {
    let cookieButton = await $('#L2AGLb');
    await cookieButton.click()
});

Then(/^Search with (.*)$/, async function (searchItem) {
    console.log(`>> searchItem: ${searchItem}`);
    let ele = await $(`[name=q]`);
    await ele.setValue(searchItem);
    await browser.keys('Enter');
});

Then(/^Click on the first search result$/, async function (){
    let ele = await $(`<h3>`);
    await ele.click()
});

Then(/^URL should match (.*)$/, async function (expectedURL){
    console.log(`>> expectedURL: ${expectedURL}`);
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedURL);
});
//Web interactions
Given(/^A web page is opened$/, async function (){
    await browser.url('/inputs');
    await browser.setTimeout({implicit: 15000, pageLoad: 10000});
    await browser.maximizeWindow();
});
When(/^Perform web interactions$/, async function (){
    /**
    //1. Input box
     1.Type into input box
     2.Clear the field and type or just add value
     3. Click and type
     4. Slow typeng
    */
    const num = 12345;
    const strNumb = num.toString()

    const ele = await $(`[type="number"]`);

    // await ele.setValue(strNumb);
    await ele.click();

    for (let i = 0; i < strNumb.length; i++) {
        let charStr = strNumb.charAt(i);
        await browser.pause(1000);
        await browser.keys(charStr);
    }

    await browser.debug();
})