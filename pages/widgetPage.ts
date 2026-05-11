import {Page,Locator,} from "@playwright/test";
import { stringify } from "node:querystring";

export class Widget{
    page:Page;
    readonly widget:Locator;
    readonly autoComplete:Locator;
    readonly searchField:Locator;
    readonly itemSelect:string;


    constructor(page:Page ,itemSelect:string)
    {
        this.page=page;
        this.widget=this.page.locator(`[href="Widgets.html"]`);
        this.autoComplete=this.page.locator(`[href="AutoComplete.html"]`);
        this.searchField=this.page.locator(`#searchbox`)
        this.itemSelect=itemSelect;
        }

    async goto(){
        await this.page.goto(`${process.env.baseUrl}`);
    }

    async toWidget(){
        await this.widget.hover();
    }
    async toAutoComplete(){
        await this.autoComplete.click();
    }
    async clickSearchField(item:string){
        await this.searchField.pressSequentially(item);
    }
    async selectItems(item:string)
    {
    
    }
}