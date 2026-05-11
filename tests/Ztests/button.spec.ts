import { test } from "@playwright/test";
import { Button } from "../../pages/Zpages/buttonPage";

test.describe("Validating Buttons page", () => {
    let button: Button;
    test.beforeEach(async ({ page }) => {
        button = new Button(page);
        await button.goto();
    });
    test("Validating Click and Confirm title", async ({ page }) => {
        await button.clickClickAndConfirmTitle();
    });
    test("Validating button is Disabled", async ({ page }) => {
        await button.clickConfirmIfTheButtonIsDisabled();
    });
    test("Validating the position of the button", async ({ page }) => {
        await button.clickFindThePositionOfTheSubmitButton();
    });
    test("Finding the save button color", async ({ page }) => {
        await button.clickFindTheSaveButton();
    });
    test("Finding the height and width of the button", async ({ page }) => {
        await button.clickFindTheHeightAndWidthOfThisButton();
    });
    test("Mouse over and confirm the color changed", async ({ page }) => {
        await button.clickMouseOverAndConfirmTheColorChanged();
    });     
    test("How many rounded buttons are there", async ({ page }) => {
        await button.clickHowManyRoundedButtonsAreThere();
    });

});
