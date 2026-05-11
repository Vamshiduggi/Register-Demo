import { test, expect } from '@playwright/test';
import { AlertsPage } from '../pages/alertsPage';

test.describe.serial('Switch to Alerts ', () => {
  let alertsPage: AlertsPage;
  test.beforeEach(async ({ page }) => {
    alertsPage = new AlertsPage(page);
    await alertsPage.gotoAlerts();
  });

  // 11. Simple Alert Accept
  test('Accept alert using page.once(dialog)', async ({ page }) => { //passed
    await alertsPage.acceptAlert();
  });

  // 12. Confirm Alert Dismiss
  test(' Dismiss confirm using dialog.dismiss()', async ({ page }) => {
    await alertsPage.gotoConfirm();                                               //passed
    await alertsPage.dismissConfirm();
  });

  // 13. Prompt with Text Input
  test('Handle prompt using dialog.accept("YourName")', async ({ page }) => {
    await alertsPage.goToAlert();
    await alertsPage.handlePrompt();
  });

  // 14. Validate Message Before Accept
  test('Validate alert message text', async ({ page }) => {
    await alertsPage.validateAlertMessage();
  });

  15.
  test.only(`using pagOff`, async ({ page }) => {
    await alertsPage.acceptAlertEvent();
  })
});
