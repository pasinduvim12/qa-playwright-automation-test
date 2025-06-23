import { test, expect } from '@playwright/test';
import {URL} from '../config.mjs'


export const product = async ({ page }) => {
  await page.goto(URL);
  

};
