import { Page, Locator, expect } from '@playwright/test';

export class AlertsPage {
  readonly page: Page;
  readonly switchToLink: Locator;
  readonly alertsLink: Locator;
  readonly alertWithOkLink: Locator;
  readonly clickthebuttontodisplayanalertbox: Locator;
  readonly alertWithOkCancelLink: Locator;
  readonly clickthebuttontodisplayaconfirmbox: Locator;
  readonly alertWithTextboxLink: Locator;
  readonly clickthebuttontodemonstratethepromptbox: Locator;

  constructor(page: Page) {
    this.page = page;

    this.switchToLink = page.locator(`//*[text()="SwitchTo"]`);
    this.alertsLink = page.locator(`[href="Alerts.html"]`);
    this.alertWithOkLink = page.locator(`[href="#OKTab"]`);
    this.clickthebuttontodisplayanalertbox = page.locator(`[class="btn btn-danger"]`);
    this.alertWithOkCancelLink = page.locator(`[href="#CancelTab"]`);
    this.clickthebuttontodisplayaconfirmbox = page.locator(`[id="CancelTab"]>button`);
    this.alertWithTextboxLink = page.locator(`[href="#Textbox"]`);
    this.clickthebuttontodemonstratethepromptbox = page.locator(`[id="Textbox"]>button`);

  }

  async gotoAlerts(): Promise<void> {
    await this.page.goto(`${process.env.baseUrl}`);
    await this.switchToLink.hover();
    await this.alertsLink.click();
    await expect(this.page).toHaveURL(/Alerts/);
  }

  // 11. Accept simple alert - page.once('dialog')
  async acceptAlert(): Promise<void> {
    this.page.once('dialog', async (dialog) => await dialog.accept());
    await this.clickthebuttontodisplayanalertbox.click();
    await this.clickthebuttontodisplayanalertbox.waitFor({ timeout: 4000 });
  }
  async gotoConfirm(): Promise<void> {
    await this.alertWithOkCancelLink.click();
  }

  // 12. Handle Confirm alert - dialog.dismiss()
  async dismissConfirm(): Promise<void> {
    this.page.once('dialog', async (dialog) => await dialog.dismiss());
    await this.clickthebuttontodisplayaconfirmbox.click();
    await this.clickthebuttontodisplayaconfirmbox.waitFor({ timeout: 5000 });
    await expect(this.page.getByText('You Pressed Cancel')).toBeVisible();
  }

  async goToAlert(): Promise<void> {
    await this.alertWithTextboxLink.click();
  }
  // 13. Handle Prompt alert - dialog.accept('YourName')
  async handlePrompt(): Promise<void> {
    this.page.once('dialog', async (dialog) => await dialog.accept('YourName'));
    await this.clickthebuttontodemonstratethepromptbox.click();
    await this.alertWithTextboxLink.waitFor({ timeout: 5000 });
    await expect(this.page.getByText('Hello YourName')).toBeVisible();
  }

  // 14. Validate alert message before accepting
  async validateAlertMessage(): Promise<void> {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe('I am an alert box!');  // Exact match
      await dialog.accept();
    });
    await this.alertWithOkLink.click();
  }

  // 15. Persistent listener with page.on/off

  async acceptAlertEvent(): Promise<void> {

    this.page.on('dialog', async (dialog) => await dialog.accept());
    await this.alertWithOkLink.click();
    await this.clickthebuttontodisplayanalertbox.click();
    await this.clickthebuttontodisplayanalertbox.waitFor({ timeout: 4000 });

    this.page.off(`dialog`, async (dialog) => await dialog.accept());
    await this.alertWithOkLink.click();
    await this.clickthebuttontodisplayanalertbox.click();
    await this.clickthebuttontodisplayanalertbox.waitFor({ timeout: 4000 });
  }



}
