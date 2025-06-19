import { When } from '@cucumber/cucumber';
import { values } from '../pageobjects/creds.js'
import * as dotenv from 'dotenv';
dotenv.config();


When("Я нажимаю на {string} в {string}", async function (element, location) {

    const object = this.pageObjects[location];
    const locator = object[element];

    await locator.click();
});


When('Я навожу на {string} в {string}', async function (element, location) {
     
    const object = this.pageObjects[location];
    const locator = object[element];
     
    await locator.moveTo();

});


When("Я скролю до {string} в {string}", async function (element, location) {

    const object = this.pageObjects[location];
    const locator = object[element];

    await locator.scrollIntoView()
});


When("Я ввожу {string} в {string} в {string}", async function (value, element, location) {

    const object = this.pageObjects[location];
    const locator = object[element];
    const creds = values[value]; 
    /*
    Т.к. value это простой объект без функций и вычислений, 
    его можно не прописывать в world и обращаться напрямую, 
    предварительно импортировав в этот файл

    В случае, если переменная не найдена - будет добавлена обычная строка
    Это дает большей вариативности и применимости 
    */
    await locator.setValue(creds || value) 
});

When("Я жду {string} секунд", async function (seconds) {

    await browser.pause(seconds * 1000)

});
