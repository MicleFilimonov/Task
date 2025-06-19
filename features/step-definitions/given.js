import { Given } from '@cucumber/cucumber';
import * as dotenv from 'dotenv';
dotenv.config();

Given('Я открываю {string}', async function (project) {

      const url = process.env[project];
      await browser.url(url);
    }
  );
  