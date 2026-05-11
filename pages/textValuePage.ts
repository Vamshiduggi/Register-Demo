import {Page,Locator} from "@playwright/test";

export class TextValue{
    page:Page;
    readonly textValue:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.textValue=page.locator(`li`);
    }

    async goto(){
        await this.page.goto(`${process.env.baseUrl}`);
    }

    async getAllTextContent(){
        const values=await this.textValue.allTextContents();
        console.log(values)
    }
}