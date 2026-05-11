import { Page,FrameLocator } from "@playwright/test";

export class FramePage {
    readonly page: Page;
    readonly frameLocator1: FrameLocator;
    readonly frameLocator2: FrameLocator;
    readonly frameLOcator3:FrameLocator;

    constructor(page: Page) {
        this.page = page;
        this.frameLocator1 = this.page.frameLocator("[src='default.xhtml']");
        this.frameLocator2 = this.page.frameLocator("[src='nested.xhtml']");
        this.frameLOcator3 = this.page.frameLocator("[src='page.xhtml']").frameLocator("[src='framebutton.xhtml']");

    }
    async navigateToFramePage() {
        await this.page.goto("https://www.leafground.com/frame.xhtml");
    }
    async clickMeInsideFrameButton() {
        await this.frameLocator1.locator("#Click").click();
    }
    async clickCountFramesButton(){
           await this.frameLocator2.locator("#Click").click();
        }   
    async clickMeInsideNestedFrameButton(){
                await this.frameLOcator3.locator("#Click").click();
        }
    }