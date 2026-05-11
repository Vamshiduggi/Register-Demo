import {Page,Locator,expect} from "@playwright/test";

export class User{
    page:Page;
    readonly userName:Locator;
    readonly password:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.userName=this.page.getByLabel(`Username`);
        this.password=this.page.getByLabel(`Password`);
    }
    async goto()
    {
        await this.page.goto(``);
    }

    async fillDetails(page:Page,username:string,password:string)
    {
        await this.userName.fill(username);
        await this.password.fill(password);
    }
}