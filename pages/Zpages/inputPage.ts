import { Page, Locator, expect } from "@playwright/test";
export class Input {
    page: Page;
    readonly typeYourName: Locator;
    readonly appendCountryTocity: Locator;
    readonly verifyIfTextBoxIsDisabled: Locator;
    readonly clearTheTypedText: Locator;
    readonly retriveTheTypedText: Locator;
    readonly typeEmailAndTabConfirmControlMovedToNextElement: Locator;
    readonly typeAboutYourself: Locator;
    readonly textEditor: Locator;
    readonly justPressEnterAndConfirmErrorMessage: Locator;
    readonly clickAndConfirmLablePositionChanges: Locator;
    readonly typeYourNameAndChooseTheThirdPosition: Locator;
    readonly typeYourDOB: Locator;
    readonly typeNumberAndSpinToConfirmValueChanged: Locator;
    readonly typeRandomNumber: Locator;
    readonly clickAndConfirmKeyboardAppears: Locator;
    readonly customToolbar: Locator;
    readonly error: Locator;

    constructor(page: Page) {
        this.page = page;
        this.typeYourName = this.page.getByPlaceholder(`Babu Manickam`);
        this.appendCountryTocity = this.page.locator(`[value="Chennai"]`);
        this.verifyIfTextBoxIsDisabled = this.page.getByPlaceholder(`Disabled`);
        this.clearTheTypedText = this.page.locator(`[value="Can you clear me, please?"]`);
        this.retriveTheTypedText = this.page.locator(`[value="My learning is superb so far."]`);
        this.typeEmailAndTabConfirmControlMovedToNextElement = this.page.locator(`[placeholder="Your email and tab"]`);
        this.typeAboutYourself = this.page.locator(`[placeholder="About yourself"]`);
        this.textEditor = this.page.locator(`//div[@class="ql-editor"]/p`);
        this.justPressEnterAndConfirmErrorMessage = this.page.locator(`//h5[text()="Just Press Enter and confirm error message*"]/parent::form/div/div/input`);
        this.clickAndConfirmLablePositionChanges = this.page.locator(`//span[@class="ui-float-label"]/input`);
        this.typeYourNameAndChooseTheThirdPosition = this.page.locator(`[placeholder="Search"]`);
        this.typeYourDOB = this.page.locator(`//span[@class="p-datepicker ui-calendar ui-trigger-calendar"]/input`);
        this.typeNumberAndSpinToConfirmValueChanged = this.page.locator(`.ui-spinner-stacked .ui-spinner-input`);
        this.typeRandomNumber = this.page.locator(`//h5[text()="Type random number (1-100) and confirm slider moves correctly"]/following-sibling::input[1]`);
        this.clickAndConfirmKeyboardAppears = this.page.locator(`[class="ui-inputfield ui-keyboard-input ui-widget ui-state-default ui-corner-all is-keypad"]`);
        this.customToolbar = this.page.locator(`[data-placeholder="Enter your content"]`);
        this.error = this.page.locator(`[aria-live="polite"][role="alert"]`);
    }

    async goto() {
        await this.page.goto(`https://www.leafground.com/input.xhtml`);
    }

    async fillTypeYourName() {
        await this.typeYourName.fill(`Vamshi`);
    }

    async fillAppendCountryToCity() {
        await this.appendCountryTocity.click();
        await this.appendCountryTocity.pressSequentially(`India`);
    }
    async isVerifyIfTextBoxIsDisabled() {
        await this.verifyIfTextBoxIsDisabled.isDisabled();
    }

    async isClearTheTheTypedText() {
        await this.clearTheTypedText.clear();
    }

    async isRetrivedTheTypedText() {
        const typedText = await this.retriveTheTypedText.inputValue();
        console.log(`The typed text is: ${typedText}`);
    }

    async isMovedToNextElement() {
        await this.typeEmailAndTabConfirmControlMovedToNextElement.fill(`abc@gmail.com`);
        await this.typeEmailAndTabConfirmControlMovedToNextElement.press(`Tab`);
        expect(this.typeAboutYourself).toBeFocused();
    }
    async fillTypeAboutYourself() {
        await this.typeAboutYourself.pressSequentially(`b jbu uhreuwhcu lierhliuweirlhu herw huvwnlak chi uch euhwlei`);
    }

    async fillTextEditor() {  ///Assert the options init.
        await this.textEditor.click();
        await this.customToolbar.locator(`[class="ql-bold ql-active"]`).click();
        await this.customToolbar.locator(`[class="ql-italic"]`).first().click();
        await this.customToolbar.locator(`[class="ql-underline"]`).first().click();
        await this.textEditor.fill(`This is a text editor with custom toolbar.`);
    }
    async isConfirmErrorMessage() {
        await this.justPressEnterAndConfirmErrorMessage.click();
        await this.page.keyboard.press(`Enter`);
        await this.page.waitForTimeout(5000);
        expect(this.error).toBeVisible();

    }
    async isClickAndConfirmLablePositionChanges() {
        await this.clickAndConfirmLablePositionChanges.click();
        expect(this.clickAndConfirmLablePositionChanges).toBeFocused();
    }
    async isTypeYourNameAndChooseTheThirdPosition() {
        await this.typeYourNameAndChooseTheThirdPosition.fill(`Vamshi`);
        await this.page.keyboard.press(`ArrowDown`);
        await this.page.keyboard.press(`ArrowDown`);
        await this.page.keyboard.press(`ArrowDown`);
        await this.page.keyboard.press(`Enter`);
    }
    async isTypeYourDOB() {
        await this.typeYourDOB.fill(`12/12/1998`);
    }
    async isTypeNumberAndSpinToConfirmValueChanged(number: string) {
        // await this.page.pause();
        await this.typeNumberAndSpinToConfirmValueChanged.fill(number);
        await this.page.keyboard.press('Tab');
        const val = await this.typeNumberAndSpinToConfirmValueChanged.inputValue();
        await console.log(`value of type number and spin to confirm value changed field ${val}`);
        await this.page.locator(`.ui-spinner-down`).click();
        const value = await this.typeNumberAndSpinToConfirmValueChanged.inputValue();
        await expect(value).not.toBe(number);

    }
    // Validating Type number and spin to confirm value changed is not working as expected, the value is not changing on clicking the spinner button. Hence commenting the code for now and will fix it later.

    async isTypeRandomNumberSliderMovesCorrectly(text: string) {
        await this.typeRandomNumber.fill(text);
        await this.page.waitForTimeout(4000);
        const slider = await this.page.locator(`.ui-slider-handle`).getAttribute(`style`);
        expect(slider).toEqual(text);
    }
    async isClickAndConfirmKeyboardAppear(){
        await this.clickAndConfirmKeyboardAppears.press('Enter');
        expect(this.page.locator(`.keypad-popup`)).toBeVisible();
    }




}
