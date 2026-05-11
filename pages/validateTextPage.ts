import {Page,Locator,expect} from "@playwright/test";

export class Validate{
    page:Page;
    readonly validateElement:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.validateElement=page.locator(`//h2[text()="Register"]`);
    }

    async goto(){
        await this.page.goto(`${process.env.baseUrl}`);
    }

    async validatingElement(){

        await expect(this.validateElement).toContainText(`Register`);
    }
}