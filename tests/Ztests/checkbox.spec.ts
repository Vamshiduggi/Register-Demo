import { test } from "@playwright/test";
import { Checkbox } from "../../pages/Zpages/checkboxPage";
test.describe(`Validating Checkboxes`, () => {
    let checkbox: Checkbox;
    test.beforeEach(async ({page}) => {
        checkbox = new Checkbox(page);
        await checkbox.goto();
    });
    test(`Validating Basic Checbox`, async ({ page }) => {
        await checkbox.basicCheckbox();
    });
    test(`Validating Notification`, async ({ page }) => {
        await checkbox.isNotificationVisible();
    });
    test(`Validating Choose your favorite language(s)`,async({page})=>{
        await checkbox.favLanguage();
    });
    test(`Validating Tri State Checkbox`,async({page})=>{
        await checkbox.tristateCheckbox();
    });
    test(`Validating Toggle Switch`,async({page})=>{
        await checkbox.toggleSwitch();
    });
    test(`Validating Disabled Checkbox`,async({page})=>{
        await checkbox.verifyCheckbox();
    }); 
    test(`Validating Select Multiple`,async({page})=>{
        await checkbox.selectMultiples();
    }); 
});