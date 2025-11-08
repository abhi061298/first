import { test } from '@playwright/test';
test('basic test', async ({ browser }) => {
    const context = await browser.newContext();

    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const [newPages] = await Promise.all([
        context.waitForEvent('page'),
        page.click("//a[@id='opentab']")
    ]);
    await newPages.waitForLoadState();
    console.log(await newPages.title());
    await newPages.locator("(//a[text()='Courses'])[1]").click();


})