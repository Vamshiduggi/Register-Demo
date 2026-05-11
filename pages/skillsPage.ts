import { Page, Locator, expect } from '@playwright/test';

export class Skills {
  readonly page: Page;
  readonly skillsDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.skillsDropdown = page.locator(`#Skills`);
  }
  
  async goto() {
        await this.page.goto(`${process.env.baseUrl}`);
    }
  async selectSkillsByVisibleText(skillText: string): Promise<void>
   {
    await this.skillsDropdown.selectOption({ label: skillText });
  }
  async assertSkillsSelected(skillText: string): Promise<void> {
    await expect(this.skillsDropdown).toHaveValue(skillText);
  }
}
