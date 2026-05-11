import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly email: Locator;
    readonly phone: Locator;
    readonly genderMale: Locator;
    readonly hobbyMovies: Locator;
    readonly skillsDropdown: Locator;
    readonly countryDropdown: Locator;
    readonly yearDropdown: Locator;
    readonly monthDropdown: Locator;
    readonly dayDropdown: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly submitBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('[placeholder="First Name"]');
        this.lastName = page.locator('[placeholder="Last Name"]');
        this.address = page.locator('textarea[ng-model="Adress"]');
        this.email = page.locator('input[type="email"]');
        this.phone = page.locator('input[type="tel"]');
        this.genderMale = page.locator('input[value="Male"]');
        this.hobbyMovies = page.locator('#checkbox2');
        this.skillsDropdown = page.locator('#Skills');
        this.countryDropdown = page.locator('#countries');
        this.yearDropdown = page.locator('#yearbox');
        this.monthDropdown = page.locator('select[placeholder="Month"]');
        this.dayDropdown = page.locator('#daybox');
        this.password = page.locator('#firstpassword');
        this.confirmPassword = page.locator('#secondpassword');
        this.submitBtn = page.locator('#submitbtn');
    }

    async goto() {
        await this.page.goto(`${process.env.baseUrl}`);
    }

    async fillRegistrationForm(details: any) {
        await this.firstName.fill(details.firstName);
        await this.lastName.fill(details.lastName);
        await this.address.fill(details.address);
        await this.email.fill(details.email);
        await this.phone.fill(details.phone);
        await this.genderMale.check();
        await this.hobbyMovies.check();
        await this.skillsDropdown.selectOption(details.skill);
        await this.countryDropdown.selectOption({label:'Select Country'});
        await this.yearDropdown.selectOption(details.dobYear);
        await this.monthDropdown.selectOption(details.dobMonth);
        await this.dayDropdown.selectOption(details.dobDay);
        await this.password.fill(details.password);
        await this.confirmPassword.fill(details.password);
    }

    async submit() {
        
        this.page.on('dialog', async dialog => {
            console.log(`Alert detected: ${dialog.message()}`);
            await dialog.dismiss();
        });
        await this.submitBtn.click();
    }
}