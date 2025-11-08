import { test } from '@playwright/test';

test('popup', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Set up the listener FIRST (before clicking)
  page.on('dialog', async (dialog) => {
    console.log('Dialog message:', dialog.message());
    await dialog.accept(); // Accept the alert
  });

  // Now click the alert button (this triggers the dialog)
  await page.locator('#alertbtn').click();
});
