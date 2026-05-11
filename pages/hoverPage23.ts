import {Page,Locator} from "@playwright/test";

export class Hover{
 page:Page;
 readonly hover:Locator;
 readonly select:Locator;

 constructor(page:Page){
    this.page=page;
    this.hover=page.locator(`//*[@href="Interactions.html"]`);
    this.select=page.locator(`//*[@href="Resizable.html"]`);
 }
 async goto(){
    await this.page.goto(`${process.env.baseUrl}`);
 }
 async goToHover(){
    await this.hover.hover();
 }
 async selectSubMenu(){
    await this.select.click()
 }
}