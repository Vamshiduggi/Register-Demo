import { Page, Locator, expect } from '@playwright/test';

export class RegisterNavigationPage {
   page: Page;
   readonly registerLink: Locator;
   readonly registerFormSection: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.registerLink = page.locator(`//*[@href="Register.html"]`);
    
    this.registerFormSection = page.locator('form');
  }

  async gotoHome(): Promise<void> {
    await this.page.goto(`${process.env.baseUrl}`);
  }

  async clickRegisterLink(): Promise<void> {
    await this.registerLink.click();
  }

  async validateRegisterFormVisible(): Promise<void> {
    await expect(this.registerFormSection).toBeVisible();
  }
}
