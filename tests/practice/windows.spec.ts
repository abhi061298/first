import { test, expect } from '@playwright/test';

test('basic test', async ({ browser }) => {
  const context = await browser.newContext();
  const page1= await context.newPage();
await page1.goto('https://rahulshettyacademy.com/AutomationPractice/');

  const [newPage] = await Promise.all([
    context.waitForEvent('page'), 
    page1.click("//button[@id='openwindow']")      
  ]);
  await newPage.waitForLoadState();
  console.log(await newPage.title());






  
});
