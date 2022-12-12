import {Given, When, Then} from "@wdio/cucumber-framework";
import chai from 'chai';
const fs = require('node:fs');


Given(/^Google page is opened$/, async function () {
    await browser.url('https://www.google.com');
    await browser.pause(1000);

    // console.log(`>> Browser: ${JSON.stringify(browser)}`);

    // fs.writeFile('./data/sample/browserObj.json', JSON.stringify(browser), err => {
    //     console.log(err, 'ERR')
    // })

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

    // console.log(`>> ELEMENT OBJECT: ${JSON.stringify(ele)}`)

    // fs.writeFile('./data/sample/elementObj.json', JSON.stringify(ele), err => {
    //     console.log(err, 'ERR')
    // })
});

Then(/^Click on the first search result$/, async function (){
    let ele = await $(`<h3>`);
    await ele.click()
});



Then(/^URL should match (.*)$/, async function (expectedURL){
    console.log(`>> expectedURL: ${expectedURL}`);
    await browser.waitUntil(async () => {
        return await browser.getTitle() === 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO';
    }, {timeout: 20000, interval: 500, timeoutMsg: 'Failed loading WDIO web page'})
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedURL);
});

//Web interactions //INPUTS
Given(/^A web page is opened$/, async function (){
    await browser.url('https://www.amazon.com');
    await browser.setTimeout({implicit: 15000, pageLoad: 10000});
    await browser.maximizeWindow();
});
When(/^Perform web interactions$/, async function (){
    /**
    //1. Input box
     1. Type into input box
     2. Clear the field and type or just add value
     3. Click and type
     4. Slow typeng
    */
    // const num = 12345;
    // const strNumb = num.toString()
    //
    // const ele = await $(`[type="number"]`);
    //
    // // await ele.setValue(strNumb);
    // await ele.click();
    // // await ele.moveTo();
    // // await ele.scrollIntoView();
    //
    // for (let i = 0; i < strNumb.length; i++) {
    //     let charStr = strNumb.charAt(i);
    //     await browser.pause(1000);
    //     await browser.keys(charStr);
    // }
    //
    // await browser.debug();
    ////////////////////////////////////////////////////////////
    // Dropdown
// Actions:
// 1. Assert default option is selected
// 2. Select by attribute, text, index
// 3. get a list of options

    // let ele = await $('//select/option[@selected="selected"]');
    // let val = await ele.getText();
    // chai.expect(val).to.equal("Please select an option");
    // await browser.debug()

    //Select a specific option

    // let ddElement = await $('#dropdown');
    // await ddElement.selectByVisibleText('Option 2'); //or
    // await ddElement.selectByIndex(2)

    //Get a list of options

    // let elementArray = await $$(`select > option`);
    // let arr = [];
    // for (let i = 0; i < elementArray.length; i++) {
    //     let ele = elementArray[i];
    //     let value = await ele.getText();
    //     arr.push(value);
    //     console.log(value);
    // }
    // console.log(`>> Options Array: ${arr}`);
    // await browser.debug()

    // чекбокс

    // let ele = await $(`//*[@id="checkboxes"]/input[1]`);
    // await ele.click();

// ///////////////// another variant
//     let ele2 = await $(`/ /*[@id="checkboxes"]/input[1]`);
//     if (!await ele2.isSelected()) {
//         await ele2.click()
//     }
    // check that true!!!!!!!!!!!!!!!
    // let ele = await $('//*[@id="checkboxes"]/input[2]');
    // let isChecked = await ele.isSelected();
    // chai.expect(isChecked).to.be.true;

        // вибрати всі чекбокси

    // let eleArr = await $$('//*[@id="checkboxes"]/input');
    // for (let i = 0; i < eleArr.length; i++) {
    //     let ele = eleArr[i];
    //     if(!await ele.isSelected()){
    //         ele.click()
    //     }
    // }

    /**
4. Windows handling
     Steps:
     1. Launch the browser
     2. Open another window
     3. Switch to the window based on title
     4. Switch back to the main window

     * Methods used:
     * 1. getTitle()
     * 2. getWindowHandle()
     * 3. getWindowHandles()
     * 4. switchToWindow()
*/

//     //open new windows
//     await $(`=Click Here`).click();
//     await $('=Elemental Selenium').click();
//
//     let currentWinTitle = await browser.getTitle();
//     let parentWindowHandle = await browser.getWindowHandle();
//
//     console.log(`>>currentWinTitle: ${currentWinTitle}`);
//
//
//     //switch to specific window
//     let winHandles = await browser.getWindowHandles();
//     for (let i = 0; i < winHandles.length; i++) {
//         console.log(`>> Win handle: ${winHandles[i]}`);
//         await browser.switchToWindow(winHandles[i]);
//         currentWinTitle = await browser.getTitle();
//
//         if(currentWinTitle === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"){
//
//             let headerTextElementSelect = await $(`<h1>`).getText();
//             console.log(`>>headerTextElementSelect: ${headerTextElementSelect}`);
//             break
//         }
//     }
// // switch back to parent window
//
//     await browser.switchToWindow(parentWindowHandle);
//
//     let parentWinHeaderText = await $(`<h3>`).getText()
//     console.log(`>>parentWinHeaderTxt: ${parentWinHeaderText}`);


    /**
     * 1. is AlertOpen()
    */

    // await $('button=Click for JS Prompt').click()
    //
    // let alert = await browser.isAlertOpen();
    //
    // if (alert){
    //
    //     let alertText = await browser.getAlertText();
    //     console.log(`>>ALERT TEXT ${alertText}`);
    //     await browser.pause(2000);
    //     await browser.sendAlertText(`Hello JS Prompt....`);
    // await browser.acceptAlert();
    // await browser.pause(2000);
    // }

    /**
     * 5. File upload
     */

    // console.log(`PROCESS CWD >>>>>>>>>>>>> ${process.cwd()}`);
    // await $(`#file-upload`).addValue("C:\\Users\\Xiaomi\\IdeaProjects\\wdion-cucumber\\data\\fileUpload\\dummy.txt");
    // await $('#file-submit').click();
    //


    /**
     * 6. Frames
     * Methods used:
     * 1. switchToFrame
     * 2. switchToParentFrame
     */

    // await $('=iFrame').click();
    // //шукаємо фрейм
    // let element = await $('#mce_0_ifr');
    // //потрібно переключитись на фрейм
    // await browser.switchToFrame(element);
    //
    // await $('#tinymce').click();
    // await browser.keys(['B', "B"]);
    // await browser.pause(2000);
    //
    // await browser.keys(["Control", "A"]);
    // await browser.pause(2000);
    //
    // await browser.keys('Delete');
    //
    // await $('#tinymce').setValue('Typing into a frame...'); // якщо тут ставити addValue(замість setValue), то буде просто дописувати до попереднього тексту
    // await browser.switchToParentFrame();


    /**
     * scroll basic
     */

    // await $('span=Top Sellers in Books for you').scrollIntoView();

    /**
     * Web TABLE ТАБЛИЦЯ
     * What are going to cover:
     * 1. Check number of rows and colums
     * 2. Get whole table data
     * 3. Get single row [based on a condition]
     * 4. Get single column
     * 5. Get single cell value [based on another cell]
     */

    /** 1. Check number of rows and colums */

    // const rowCount = await $$('//*[@id="table1"]/tbody/tr').length;
    // chai.expect(rowCount).to.equal(4);
    //
    // console.log('>> Number of rows: '+ rowCount);
    //
    //
    // const colCount = await $$('//*[@id="table1"]/thead/tr/th').length;
    // chai.expect(colCount).to.equal(6);
    //
    // console.log('>> Number of colCount: '+ colCount);

    /** 2. Get whole table data */

    ////*[@id="table1"]/tbody/tr[2]/td[4]
    ///html/body/div[2]/div/div/table[1]/tbody/tr[2]/td[4]

    /** 3. Get single row [based on a condition] */
    // let array = [];
    //
    // for (let i = 0; i < rowCount; i++) {
    //
    //     let personObj = {
    //         lastName: '',
    //         firstName: '',
    //         email: '',
    //         due: '',
    //         web: ''
    //     }
    //
    //     for (let j = 0; j < colCount; j++) {
    //
    //         let cellValue = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[${j+1}]`).getText();
    //         let firstName = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[2]`).getText();
    //
    //         if (firstName === 'Jason' || firstName === 'John'){
    //             if (j===0) personObj.lastName = cellValue;
    //             if (j===1) personObj.firstName = cellValue;
    //             if (j===2) personObj.email = cellValue;
    //             if (j===3) personObj.due = cellValue;
    //             if (j===4) personObj.web = cellValue;
    //         }
    //     }
    //     if (personObj.firstName){
    //         array.push(personObj);
    //     }
    // }
    //
    // console.log(`Whole table: ${JSON.stringify(array)}`)

    ////*[@id="table1"]/tbody/tr[4]/td[3]
    //*[@id="table1"]/tbody/tr[4]/td[1]
    /** 4. Get single column */

    /** 5. Get single cell value [based on another cell] */

    // let arr = [];
    //
    // for (let i = 0; i < rowCount; i++) {
    //
    //         // const cellValue = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[${j+1}]`).getText();
    //         const price = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[4]`).getText();
    //         const firstName = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[2]`).getText();
    //
    //         const actualPrice = +(price.replace('$', ''));
    //
    //         if (actualPrice > 50){
    //             arr.push(firstName);
    //         }
    // }
    // console.log(`>> Single col values: ${arr}`);


    /**
     * SCROLLING
     *
     * Visible portion
     * windows object:
     * 1. scrollBy
     * Y -> [-]window.innerHeight
     */
    // Scroll down один розмір екрана

    // await browser.execute(()=> {
    //     window.scrollBy(0, window.innerHeight)
    // })
    //
    // await browser.pause(2000);

    // Scroll top один розмір екрана

    // await browser.execute(()=> {
    //     window.scrollBy(0, -window.innerHeight)
    // })

    //scroll to bottom
    // await browser.pause(2000);
    await browser.execute(()=> {
        window.scrollTo(0, document.body.scrollHeight);
    })

    await browser.pause(2000);


    await browser.execute(()=> {
        window.scrollTo(0, document.body.scrollTop)
    })
    await browser.debug();


})
