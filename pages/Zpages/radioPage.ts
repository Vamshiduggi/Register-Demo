import { Page, Locator, expect } from "@playwright/test";
export class Radio {
    page: Page;
    constructor(page: Page) {
        this.page = page;

    }
    async goto() {
        await this.page.goto(`https://www.leafground.com/radio.xhtml`);
    }
    //click the radio button based on the argument
    async checkFavBrowser(Browser: string) {
        await this.page.locator(`(//label[text()="${Browser}"]/preceding-sibling::div/div[2])[1]`).click();
    }

}