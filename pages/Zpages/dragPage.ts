import {Page, Locator } from "@playwright/test";


export class Drag {
    page: Page;
    readonly draggable: Locator;
    readonly droppable: Locator;
    constructor(page: Page) {
        this.page = page;
        this.draggable = this.page.locator(`[id="form:conpnl"]`);
        this.droppable = this.page.locator(`[id="form:drop"]`);
    }

    async goto(){
        await this.page.goto(`https://www.leafground.com/drag.xhtml`);
    }
    async dragAndDrop(){
        await this.draggable.dragTo(this.droppable);    
    }
}