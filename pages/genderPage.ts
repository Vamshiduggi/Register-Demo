import { Page, Locator, expect } from '@playwright/test';

export class Gender {
  readonly page: Page;
  readonly maleRadio: Locator;
  readonly femaleRadio: Locator;

  constructor(page: Page) {
    this.page = page;
    this.maleRadio = page.locator('input[value="Male"]');
    this.femaleRadio = page.locator('input[value="FeMale"]');
  }

  async goto() {
        await this.page.goto(`${process.env.baseUrl}`);
    }

  async selectMale(): Promise<void> {
    await this.maleRadio.check();
  }

  async selectFemale(): Promise<void> {
    await this.femaleRadio.check();
  }

  async assertMaleSelected(): Promise<void> {
    await expect(this.maleRadio).toBeChecked();
  }

  async assertFemaleSelected(): Promise<void> {
    await expect(this.femaleRadio).toBeChecked();
  }

 
  async selectGender(gender: 'Male' | 'Female'): Promise<void> {
    if(gender === 'Male')
        await this.maleRadio.check();
    else
        await this.femaleRadio.check();
  }

  async assertGenderSelected(gender: 'Male' | 'Female'): Promise<void> {
    if(gender === 'Male')
        await expect(this.maleRadio).toBeChecked();
    else
        await expect(this.femaleRadio).toBeChecked();
  }
}
