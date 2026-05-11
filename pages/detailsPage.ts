import { Locator, Page,} from "@playwright/test"

interface DetailsPage {
    page: Page
    firstName: Locator
    lastName: Locator
    email: Locator
}

export class DetailsPageImpl implements DetailsPage {
    page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator
    readonly email: Locator;

    constructor(page: Page) {
        this.page = page
        this.firstName = this.page.locator(`[placeholder="First Name"]`)
        this.lastName = this.page.locator(`[placeholder="Last Name"]`)
        this.email = this.page.locator(`[ng-model="EmailAdress"]`)
    }

    async goto() {
        await this.page.goto(`${process.env.baseUrl}`);
    }

    async fillFirstName() {
        await this.firstName.fill("Vamshi");
    }
    async fillLastName() {
        await this.lastName.fill("Duggi");
    }
    async fillEmail() {
        await this.email.fill("vamshi.duggi@2gmaial.com");
    }

}