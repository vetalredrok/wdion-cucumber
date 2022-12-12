import {Then} from "@wdio/cucumber-framework";
import chai from 'chai';

Then(/^Inventory page should list (.*)$/, async function (numbersOfProducts) {
    if (!numbersOfProducts){
        throw Error('Invalid number provided: ' + numbersOfProducts);
    }

    let eleArr = await $$('.inventory_item_name');
    chai.expect(eleArr.length).to.equal(parseInt(numbersOfProducts)); // === використовувати PARSE INT а не +перед
})

/**
 * Steps:
 * 1. Get price list
 * 2. Convert string to number
 * 3. Filter if any value is <=0
 */
Then(/^Validate all products have valid price$/, async function () {

    /**1. Get price list*/
    const arrayElements = await $$('.inventory_item_price');

    const pricesArray = [];

    for (const arrayElement of arrayElements) {
        let priceStr = await arrayElement.getText();
        pricesArray.push(priceStr);
    }

    console.log('>> Price with $: '+ pricesArray);

    /**2. Convert string to number*/

    const priceNumbersArray = pricesArray.map(value => +(value.replace("$", "")));
    console.log('>> Price numbers with $: '+ priceNumbersArray);

    /**3. Filter if any value is <=0*/
    const filteredInvalidArray = priceNumbersArray.filter(value => value <= 0);
    chai.expect(filteredInvalidArray.length).to.equal(0);
})