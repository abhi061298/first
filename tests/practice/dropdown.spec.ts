import {test } from'@playwright/test';


test.describe('two tagged tests', {
  tag: '@smoke',
}, () => {
  test('one', async ({ page }) => {
await page.goto('/');
const dropdown = await page.locator("//select[@id='dropdown-class-example']");
dropdown.click();
await page.selectOption('Select','Option3');
await page.pause();
// await page.$("")
// await page.$("")


  });

  
});