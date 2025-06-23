// @ts-check
import { test, expect } from '@playwright/test';
import{product} from '../common/commonfunction.mjs';

export const productNav2 = () => {
  test.describe(() => {

test('has title', async ({ page }) => {

  
  await product({page});
 
  await page.waitForTimeout(1000);
   await expect(page.locator('//*[@class="x-item-title__mainTitle"][1]')).toContainText('Mens RFID Blocking Genuine Leather wallet , Men Wallet with Snap Button');

  //Validate Similar items
 await page.mouse.wheel(0, 700);
 const keyword1 = 'wallet';
 const keyword2 = 'leather';

const titles = await page.locator('//div[@id="placement101875"]').allInnerTexts();

 const allText = titles.join(' ').toLowerCase();
 
 await page.waitForTimeout(4000);
  expect(allText).toContain(keyword1);
  expect(allText).toContain(keyword2);

});
});
}