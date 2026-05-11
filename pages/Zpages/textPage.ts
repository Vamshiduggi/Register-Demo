import { Locator, expect, Page } from "@playwright/test";
export class Text {
    readonly page: Page;
    readonly favAutomationTool: Locator;
    readonly preferredCountry: Locator;
    readonly countryIsLoaded: Locator;
    readonly chooseTheCourse: Locator;
    readonly languageRandomly: Locator;
    readonly two: Locator;
    constructor(page: Page) {
        this.page = page;
        this.favAutomationTool = this.page.locator(`//h5[text()="Which is your favorite UI Automation tool?"]/following-sibling::div/div/select`);
        this.preferredCountry = this.page.locator(`//label[text()="Select Country"]`);
        this.countryIsLoaded = this.page.locator(`//label[text()="Select City"]/following-sibling::div`);
        this.chooseTheCourse = this.page.locator(`[placeholder="Choose Course"]`);
        this.languageRandomly = this.page.locator(`//label[text()="Select Language"]/following-sibling::div`);
        this.two = this.page.locator(`//label[text()="Select Values"]`);
    }

    async goto() {
        await this.page.goto(`https://www.leafground.com/select.xhtml`);
    }
    async selectFavautomationTool() {
        await this.favAutomationTool.selectOption(`Playwright`);
    }
    async choosePreferredCountry(country: string) {
        await this.preferredCountry.click();
        await this.page.locator(`[data-label="${country}"]`).click();
    }
    async selectCountryIsLoaded(city: string) {
        await this.countryIsLoaded.click();
        await this.page.locator(`[data-label="${city}"]`).click();
    }
    async selectChooseTheCoures(course?: string) {
        await this.page.locator(`//h5[text()="Choose the Course"]/following-sibling::div/button`).click();
        // await this.chooseTheCourse.fill(course);
        await this.page.waitForTimeout(4000);
        if (await this.page.locator(`[data-item-value="${course}"]`).isVisible()) {
            await this.page.locator(`[data-item-value="${course}"]`).click();
        }
    }
    async selectChooseLanguage(language: string) {
        await this.languageRandomly.click();
        await this.page.locator(`[data-label="${language}"]`).click();
    }
    async selectTwo(langu: string):Promise<void> {
        await this.two.click();
        if (langu == 'English') {
            await this.page.locator(`//li[text()="Select Values"]/following-sibling::li[3]`).click();
        }
        else if (langu == 'Tamil') {
            await this.page.locator(`//li[text()="Select Values"]/following-sibling::li[1]`).click();
        }
        else if (langu == 'Telugu') {
            await this.page.locator(`//li[text()="Select Values"]/following-sibling::li[3]`).click();
        }
        else if (langu == 'Kannada') {
            await this.page.locator(`//li[text()="Select Values"]/following-sibling::li[1]`).click();
        }
        else if (langu == 'Malayalam') {
            await this.page.locator(`//li[text()="Select Values"]/following-sibling::li[3]`).click();
        }
        else {
            await this.page.locator(`//li[text()="Select Values"]/following-sibling::li[3]`).click();
        }


    }
}