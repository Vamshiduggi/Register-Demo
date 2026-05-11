import {Page,Locator,expect} from "@playwright/test";

export class Address{
    page:Page;
    readonly address:Locator;
     
    constructor(page:Page)
    {
        this.page=page;
        this.address=this.page.locator(`//*[@ng-model="Adress"]`);
    }

    async goto(){
        await this.page.goto(`${process.env.baseUrl}`);
    }

    async fillAddress(addresss:string):Promise<void>{
        await this.address.fill(addresss);
    }

    async assertAddress(addresss:string){
        await expect(this.address).toHaveValue(addresss)
    }
}