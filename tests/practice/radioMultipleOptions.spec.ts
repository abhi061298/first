import { Locator, Selectors, test } from '@playwright/test';


test.describe('two tagged tests', {
    tag: '@smoke',
}, () => {
    test('one', async ({ page }) => {
        await page.goto('/');
      const title=   await page.title();
      console.log(title)

        // await page.locator("//input[@value='radio2']").check();

        // const boxList = await page.locator('input[type="checkbox"]');

        // const boxCount = await boxList.count();

        // for (let i = 0; i <= boxCount; i++) {
        //     const singleBox = boxList.nth(i);            
        //     await singleBox.click();

        // }


    });




});

async function waitForSelector(locator: Locator,
    options: { highlight?: boolean; scroll?: boolean; timeout?: number } = { scroll: true, timeout: 1000 }

) {
    await locator.waitFor({ state: 'visible', });
    if (options.scroll) {
        await locator.scrollIntoViewIfNeeded({ timeout: options.timeout });
    }




}
