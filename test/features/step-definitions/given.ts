import {Given} from "@cucumber/cucumber";
import chai from 'chai';

Given(/^Login to inventory web app$/, async function (){
    /**
     * 1. Open an inventory app in browser
     */

    await browser.url("https://www.saucedemo.com");
    // await browser.setTimeout({implicit: 15000, pageLoad:10000})
    await browser.maximizeWindow();

    /**
     * 2. Login to inventory app
     */
    try {
        await $("#user-name").setValue('standard_user');
        await $("#password").setValue('secret_sauce');
        await $("#login-button").click();
        // await browser.pause(2000);

        await browser.debug();
    } catch (e) {
        console.log(`Error in first login. Retrying...`);

        await browser.pause(1000);
        await browser.refresh();
        await browser.pause(2000);
        await $("#user-name").setValue('standard_user');
        await $("#password").setValue('secret_sauce');
        await $("#login-button").click();
    }

    /**
     * Login with another user
     * */

    // await browser.pause(2000);
    // await browser.reloadSession();
    //
    // await browser.url('https://www.saucedemo.com');
    // await $("#user-name").setValue('problem_user');
    // await $("#password").setValue('secret_sauce');
    // await $("#login-button").click();


    /**
     * кнопки вперед і назад
     */

    // await browser.back();
    // await browser.pause(2000);
    // await browser.forward();
    //
    // await browser.debug();
})