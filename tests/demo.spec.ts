import {test,Page} from "@playwright/test";

test(`Demo testing`,async({page})=>{

    await page.goto(`https://www.leafground.com/dashboard.xhtml`);
    await page.locator(`//span[text()="Daily Quiz"]/parent::li/div[1]/div[2]`).click();
})