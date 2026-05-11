import {Page,Locator} from "@playwright/test";

export class FileInput{

    page:Page;
    readonly fileInput:Locator;
     
    constructor(page:Page)
    {
        this.page=page;
        this.fileInput=page.locator(`#imagesrc`);
    }

    async goto() {
        await this.page.goto(`${process.env.baseUrl}`);
    }
    async uploadFile(){
        await this.fileInput.setInputFiles(`tests\\Images\\images.webp`);
    }
   
}