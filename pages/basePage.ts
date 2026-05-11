import { Page, expect } from '@playwright/test';

export default class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async waitForLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }
}
