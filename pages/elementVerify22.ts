import {Page,Locator,expect} from "@playwright/test";

export class ElementVisible{
    page:Page;
    readonly element:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.element=page.locator(`[id="submitbtn"]`);
    }
    async goto(){
        await this.page.goto(`${process.env.baseUrl}`);
    }

    async isElementVisible(){
        await this.element.isVisible();
    }
    async isElementEnabled(){
        await this.element.isEnabled();
    }
}