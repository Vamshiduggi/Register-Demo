import { test } from "@playwright/test";
import { Input } from "../../pages/Zpages/inputPage";
test.describe(`Validating input fields`, async () => {
    let input: Input;
    test.beforeEach(async ({ page }) => {
        input = new Input(page);
        input.goto();
    });
    test(`Validating Type your Name`, async ({ page }) => {
        await input.fillTypeYourName();
    });
    test(`Validating Append Country to City`, async ({ page }) => {
        await input.fillAppendCountryToCity();
    });
    test(`Validating Verify if Text Box is disabled`, async ({ page }) => {
        await input.isVerifyIfTextBoxIsDisabled();
    });
    test(`Validating Clear the typed text`, async ({ page }) => {
        await input.isClearTheTheTypedText();
    });
    test(`Validating Retrive the typed text`, async ({ page }) => {
        await input.isRetrivedTheTypedText();
    });

    test(`Validating Type email and tab confirm control moved to next element`, async ({ page }) => {
        await input.isMovedToNextElement();
    });
    test(`Validating Type about yourself`, async ({ page }) => {
        await input.fillTypeAboutYourself();
    });
    test.skip(`Validating Text Editor`, async ({ page }) => {
        await input.fillTextEditor();
    });
    test(`Validating Just press enter and confirm error message`, async ({ page }) => {
        await input.isConfirmErrorMessage();
    });

    test(`Validating Click and confirm lable position changes`, async ({ page }) => {
        await input.isClickAndConfirmLablePositionChanges();
    });
    test(`Validating Type your name and choose the third position`, async ({ page }) => {
        await input.isTypeYourNameAndChooseTheThirdPosition();
    });
    test(`Validating Type your DOB`, async ({ page }) => {
        await input.isTypeYourDOB();
    });
    test.only(`Validating Type number and spin to confirm value changed`, async ({ page }) => {  //not working
        await input.isTypeNumberAndSpinToConfirmValueChanged('100');
    });
    test(`Validating Typing Random Number and Checking slided Correctly`, async ({ page }) => { //not working
        await input.isTypeRandomNumberSliderMovesCorrectly('7');
    });
    test('Testing Keyboard Appears', async ({ page }) => {
        await input.isClickAndConfirmKeyboardAppear();
    });


});