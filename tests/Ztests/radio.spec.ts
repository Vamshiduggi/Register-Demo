import { test } from "@playwright/test";
import { Radio } from "../../pages/Zpages/radioPage";
test.describe(`Validating Radio Buttons`, () => {
    let radio: Radio;
    test.beforeEach(async ({ page }) => {
        radio = new Radio(page);
    });
    test(`Validating Your most favorite browser`, async ({ page }) => {
        await radio.checkFavBrowser(`Firefox`);
    });
})