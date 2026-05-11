import {Page,Locator} from "@playwright/test";

export class MultipeElements{
    page:Page;
    readonly elements:Locator;

    constructor(page:Page){
        this.page=page;
        this.elements=this.page.locator(`[class="ui-widget-content"]`);
    }

    async goto(){
        await this.page.goto(`${process.env.baseUrlNew}`);
    }

    // 9 FIRST ELEMENT 
    // async selectFirstElement()
    // {
    //    await this.elements.count();
    //    await this.elements.first().click();
    // }
    
    // 18 THIRD ELEMENT
    async selectThirdElement(){
        await this.elements.count();
        await this.elements.nth(2).click();
    }
}