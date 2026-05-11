import { Page, Locator, expect } from "@playwright/test";
export class Alerts {
    readonly page: Page;
    readonly simpleDialog: Locator;
    readonly confirmDialog: Locator;
    readonly sweetAlertDialog: Locator;
    readonly sweetModalDialog: Locator;
    readonly promptDialog: Locator;
    readonly sweetAlertConfirmation: Locator;
    readonly minimizeAndMaximize: Locator;

    constructor(page: Page) {
        this.page = page;
        this.simpleDialog = this.page.locator(`//h5[text()=' Alert (Simple Dialog)']//following-sibling::button`);
        this.confirmDialog = this.page.locator(`//h5[text()=' Alert (Confirm Dialog)']//following-sibling::button`);
        this.sweetAlertDialog = this.page.locator(`//h5[text()='Sweet Alert (Simple Dialog)']//following-sibling::button`);
        this.sweetModalDialog = this.page.locator(`//h5[text()='Sweet Modal Dialog']//following-sibling::button`);
        this.promptDialog = this.page.locator(`//h5[text()=' Alert (Prompt Dialog)']//following-sibling::button`);
        this.sweetAlertConfirmation = this.page.locator(`//h5[text()='Sweet Alert (Confirmation)']//following-sibling::button`);
        this.minimizeAndMaximize = this.page.locator(`//h5[text()="Minimize and Maximize"]/following-sibling::button`);
    }
    async goto() {
        await this.page.goto('https://www.leafground.com/alert.xhtml');
    }
    async clickSimpleDialog() {
        this.page.on('dialog', async (dialog) => await dialog.accept());
        await this.simpleDialog.click();
    }
    async clickConfirmDialog(): Promise<void> {
        this.page.once('dialog', async dialog => {
            //await this.page.waitForTimeout(3000);
            await dialog.accept();
        });
        await this.confirmDialog.click();
    }
    async clickSweetAlertDialog() {
        await this.sweetAlertDialog.click();
        await this.page.waitForTimeout(5000);
        const alertText = await this.page.locator(`//span[text()="Dialog"]/parent::div/following-sibling::div/p`).textContent();
        console.log("Sweet Alert Text:", alertText);
        await this.page.locator(`//span[text()="Dismiss"]/parent::button`).click();
    }

    async clickSweetModalDialog() {
        await this.sweetModalDialog.click();
        await this.page.waitForTimeout(5000);
        const modalText = await this.page.locator(`//span[text()="Modal Dialog (Sweet Alert)"]/parent::div/following-sibling::div/p`).textContent();
        console.log("Sweet Modal Dialog Text:", modalText);
        await this.page.locator(`//span[text()="Modal Dialog (Sweet Alert)"]/following-sibling::a`).click();
    }

    async clickPromptDialog(): Promise<void> {
        this.page.on('dialog', dialog => {
            dialog.accept('Playwright');
        });
        await this.promptDialog.click();
    }
 
    async clickSweetAlertConfirmaton() {
        await this.sweetAlertConfirmation.click();
        await this.page.waitForTimeout(5000);
        const deleteAlertText = await this.page.locator(`//span[text()="Confirmation"]/parent::div/following-sibling::div/span[2]`).textContent();
        console.log("Sweet Alert Delete Confirmation Text:", deleteAlertText);
        await this.page.locator(`//span[text()="Yes"]/parent::button`).click();
    }
}
