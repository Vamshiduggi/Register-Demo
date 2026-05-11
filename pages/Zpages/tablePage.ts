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
    async Search(String: string): Promise<void> {
        await this.search.fill(String);
    }

}