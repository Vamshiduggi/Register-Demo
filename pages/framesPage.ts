import { Page, FrameLocator, Locator } from '@playwright/test';

export class FramesPage {
    readonly page: Page;
    readonly switchTo: Locator;
    readonly frames: Locator;
    readonly singleFrame: FrameLocator;
    readonly textbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.switchTo = page.locator(`//*[text()="SwitchTo"]`);
        this.frames = page.locator(`//*[@href="Frames.html"]`);
        this.singleFrame = page.frameLocator('[id="singleframe"]');
        this.textbox = this.singleFrame.getByRole('textbox');
    }

    async goto() {
        await this.page.goto(`${process.env.baseUrl}`);
    }
    async gotoSwitch() {
        await this.switchTo.hover();
    }
    async goToFrame() {
        await this.frames.click()
    }
    async enterTextbox(value: string) {
        await this.textbox.fill(value);
    }

    async getTextboxValue(): Promise<string> {
        return await this.textbox.inputValue();
    }
}
