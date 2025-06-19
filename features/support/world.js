import { setWorldConstructor } from '@cucumber/cucumber';

import * as dotenv from 'dotenv';
dotenv.config();

import Menu  from '../pageobjects/topMenu.js';
import Promo  from '../pageobjects/promo.js';
import Statuses  from '../pageobjects/statuses.js';
import Tournaments  from '../pageobjects/tournaments.js';
import Bonuses  from '../pageobjects/bonuses.js';
import Lotteries  from '../pageobjects/lotteries.js';
import Cashback  from '../pageobjects/cashback.js';
import News  from '../pageobjects/news.js';
import Actions  from '../pageobjects/actions.js';
import Auth  from '../pageobjects/auth.js';
import MainHeader  from '../pageobjects/mainheader.js';
import Profile  from '../pageobjects/profile.js';

export default class World {
  constructor() {
    this.pageObjects = {
      "Верхнее меню":   new Menu(),
      "Промо":  new Promo(),
      "Статусы" : new Statuses(),
      "Турниры" : new Tournaments(),
      "Бонусы" : new Bonuses(),
      "Лотереи" : new Lotteries(),
      "Кешбэк" : new Cashback(),
      "Новости" : new News(),
      "Акции" : new Actions(),
      "Форма авторизации" : new Auth(),
      "Хедер" : new MainHeader(),
      "Страница профиля" : new Profile(),
    };
  }
} 
setWorldConstructor(World)