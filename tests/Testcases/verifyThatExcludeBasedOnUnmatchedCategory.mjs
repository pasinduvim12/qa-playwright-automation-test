// @ts-check
import { test, expect } from '@playwright/test';
import{product} from '../common/commonfunction.mjs';

export const productNav3 = () => {
  test.describe(() => {

test('has title', async ({ page }) => {

  
  await product({page});
 
  await page.waitForTimeout(1000);
   await expect(page.locator('//*[@class="x-item-title__mainTitle"][1]')).toContainText('Mens RFID Blocking Genuine Leather wallet , Men Wallet with Snap Button');

   await page.waitForTimeout(3000);

  //Validate Similar items
 await page.mouse.wheel(0, 700);
const forbiddenWords = ['wallet', 'leather'];

const titles = await page.locator('//div[@id="placement101875"]').allInnerTexts();
const found = titles.some(title =>
    forbiddenWords.some(word => title.toLowerCase().includes(word))
  );

  expect(found).toBeFalsy();

});
});
}