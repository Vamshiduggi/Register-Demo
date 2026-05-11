import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.leafground.com/alert.xhtml');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('button[name="j_idt88:j_idt91"]').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('button[name="j_idt88:j_idt93"]').click();
  await page.locator('button[name="j_idt88:j_idt95"]').click();
  await page.getByRole('button', { name: ' Dismiss' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('button[name="j_idt88:j_idt104"]').click();
  await page.locator('button[name="j_idt88:j_idt100"]').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: ' Delete' }).click();
  await page.getByRole('button', { name: ' Yes' }).click();
});