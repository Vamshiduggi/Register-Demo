import { test } from "@playwright/test";
import { Alerts } from "../../pages/Zpages/alertPage";

test.describe(`Validating the Alert OPage`, async () => {
    let alert: Alerts;
    test.beforeEach(`Goto`, async ({ page }) => {
        alert = new Alerts(page);
        await alert.goto();
    });

    test(`Validating Alert (Simple Dialog)`, async ({ page }) => {
        await alert.clickSimpleDialog();
    });

    test(`Validating Alert (Confirm Dialog)`, async ({ page }) => {
        await alert.clickConfirmDialog();
    });
    test(`Validating Sweet Alert (Simple Dialog)`, async ({ page }) => {
        await alert.clickSweetAlertDialog();
    });
    
    test(`Validating Sweet Modal Dialog Alert`, async ({ page }) => {
        await alert.clickSweetModalDialog();
    });
    test(`Validating Prompt (Dialog Alert)`, async ({ page }) => {
        await alert.clickPromptDialog();
    });
    test(`Validating Sweet Alert (Confirmation)`, async ({ page }) => {
        await alert.clickSweetAlertConfirmaton();
    });
    // test(`Validating Minimize and Maximize Alert`, async ({ page }) => {
    //     await alert.clickMinimizeAndMaximize();
    // });
});
