import { test } from "@playwright/test";
import { WindowPage } from "../../pages/Zpages/windowPage";

test.describe("Window page test", () => {
    let window: WindowPage;
    test.beforeEach(async ({ page }) => {
        window = new WindowPage(page);
        await window.goto();
    });
    test(`validating Open Button `, async ({ page }) => {
        await window.clickOpenButton();
    });

    test(`Validating Open Multiple Button`, async ({ page }) => {
        await window.clickMultipleButton();
    });

    test(`Validtaing Close Window Button`, async ({ page }) => {
        await window.clickCloseWindowButton();
    });

    test(`Validating Open With Delay Button`, async ({ page }) => {
        await window.clickOpenWithDelayButton();
    })
});

