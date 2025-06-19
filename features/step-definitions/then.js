import { Then } from '@cucumber/cucumber';
import * as dotenv from 'dotenv';
dotenv.config();


// Проверка видиомсти 1-ого элементов в указанном месте (классе)
Then("Я {string} {string} в {string}", async function (activity, element, location) {

    const object = this.pageObjects[location];
    const locator = object[element];

    if (activity === "вижу") {
        await expect(locator).toBeDisplayed()
    } else if (activity === "не вижу") {
        await expect(locator).not.toBeDisplayed()
    }
});

// Проверка видиомсти 2-х элементов в указанном месте (классе)
Then("Я {string} {string} и {string} в {string}",
    async function (activity, element1, element2, location) {

        const object = this.pageObjects[location];
        const locator1 = object[element1];
        const locator2 = object[element2];


        if (activity === "вижу") {
            await expect(locator1).toBeDisplayed()
            await expect(locator2).toBeDisplayed()
        } else if (activity === "не вижу") {
            await expect(locator1).not.toBeDisplayed()
            await expect(locator2).not.toBeDisplayed()
        }
    });