import {Page,Locator} from "@playwright/test";
export class Reusable{
    page:Page;
    readonly select:Locator;

    constructor(page:Page){
        this.page=page;
        this.select=this.page.locator(`#Skills`);
    }
    async goto(){
        await this.page.goto(`${process.env.baseUrl}`);
    }
    async selectElement(value:string):Promise<void>{
        await this.select.selectOption({ label: value });

        await this.page.locator(`search`).pressSequentially(value);
        await this.page.locator(`//li/a[text()=${value}]`).click()
    }
}