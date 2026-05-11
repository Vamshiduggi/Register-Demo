import { Page,Locator } from "@playwright/test";

export class HobbiesPage{
    page:Page;
    readonly cricket:Locator;
    readonly movies:Locator;
    readonly hockey:Locator;

    constructor(page:Page) {
        this.page = page;
        this.cricket = this.page.locator(`[value="Cricket"]`);
        this.movies = this.page.locator(`[value="Movies"]`);
        this.hockey = this.page.locator(`[value="Hockey"]`);
    }
    async goto() {
        await this.page.goto(`${process.env.baseUrl}`);
    }

    async selectCricket() {
        await this.cricket.check();
    }
    async selectMovies() {
        await this.movies.check();
    }
    async selectHockey() {
        await this.hockey.check();
    }

    async selectAllHobbies() {
        await this.cricket.isChecked();
        await this.movies.isChecked();
        await this.hockey.isChecked();
}
}