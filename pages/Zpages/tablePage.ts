import { Page, Locator } from "@playwright/test";
export class Table {
    page: Page;
    readonly search: Locator;
    constructor(page: Page) {
        this.page = page;
        this.search = this.page.getByPlaceholder(`Search`);
    }
    async goto() {
        await this.page.goto(`https://www.leafground.com/table.xhtml`);
    }
    // Finding the names according to its naming convention in search 
    async Search(String: string): Promise<void> {
        await this.search.fill(String);
    }

}