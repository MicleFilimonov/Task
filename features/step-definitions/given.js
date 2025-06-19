import { Given } from '@cucumber/cucumber';
import * as dotenv from 'dotenv';
dotenv.config();

Given('Я открываю {string}', async function (project) {
      // Получаем URL прямо из process.env по ключу из фичи
      const url = process.env[project];
      await browser.url(url);
    }
  );
  