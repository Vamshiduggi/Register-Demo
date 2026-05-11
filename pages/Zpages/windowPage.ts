import { Page, Locator } from "@playwright/test";

export class WindowPage {
    page: Page;
    readonly open: Locator;
    readonly openMultiple: Locator;
    readonly closeWindows: Locator;
    readonly openWityhDelay: Locator;

    constructor(page: Page) {
        this.page = page;
        this.open = this.page.locator(`//span[text()="Open"]`);
        this.openMultiple = this.page.locator(`//span[text()="Open Multiple"]`);
        this.closeWindows = this.page.locator(`//span[text()="Close Windows"]`);
        this.openWityhDelay = this.page.locator(`//span[text()="Open with delay"]`);
    }

    async goto() {
        await this.page.goto(`https://www.leafground.com/window.xhtml`);
    }

    async clickOpenButton() {
        await this.open.click();
    }

    async clickMultipleButton() {
        await this.openMultiple.click();

    }
    async clickCloseWindowButton() {
        await this.closeWindows.click();

    }
    async clickOpenWithDelayButton() {
        await this.openWityhDelay.click();
    }
}