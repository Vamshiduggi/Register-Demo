import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.leafground.com/input.xhtml');
  await page.locator('[id="j_idt106:j_idt118_input"]').click();
  await page.locator('[id="j_idt106:j_idt118_input"]').fill('8');
  await page.locator('.ui-spinner-button.ui-spinner-down').click();
  await page.locator('.ui-spinner-button.ui-spinner-down').click();
  await page.locator('.ui-spinner-button').first().click();
  await page.locator('.ui-spinner-button').first().click();
});