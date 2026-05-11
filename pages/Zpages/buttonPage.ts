import { Locator, Page, expect } from "@playwright/test";
export class Button {
    readonly page: Page;
    readonly clickAndConfirmTitle: Locator;
    readonly confirmIfTheButtonIsDisabled: Locator;
    readonly findThePositionOfTheSubmitButton: Locator;
    readonly findTheSaveButton: Locator;
    readonly findTheHeightAndWidthOfThisButton: Locator;
    readonly mouseOverAndConfirmTheColorChanged: Locator;
    readonly clickImageButtonAndClickOnAnyHiddenButton: Locator;
    // readonly howManyRoundedButtonsAreThere:Locator;

    constructor(page: Page) {
        this.page = page;
        this.clickAndConfirmTitle = this.page.locator(`button:has(span:has-text("Click"))`);
        this.confirmIfTheButtonIsDisabled = this.page.locator(`//span[text()="Disabled"]/parent::button`);
        this.findThePositionOfTheSubmitButton = this.page.locator(`//span[text()="Submit"]/parent::button[contains(@class,'ui-button-text-icon-left')]`);
        this.findTheSaveButton = this.page.locator(`//span[text()="Save"]/parent::button`);
        this.findTheHeightAndWidthOfThisButton = this.page.locator(`//span[text()="Submit"]/parent::button[contains(@class,'ui-button-text-icon-right')]`);
        this.mouseOverAndConfirmTheColorChanged = this.page.locator(`//span[text()="Success"]/parent::button[contains(@class,'ui-button-raised')]`);
        this.clickImageButtonAndClickOnAnyHiddenButton = this.page.locator(`//span[text()="Image"]/parent::button`);
        // this.howManyRoundedButtonsAreThere=this.page.locator(``);
    }
    async goto() {
        await this.page.goto(`https://www.leafground.com/button.xhtml`);
    }
    // Validating the button peroforms the expected action
    async clickClickAndConfirmTitle() {
        await this.clickAndConfirmTitle.click();
        await expect(this.page).toHaveTitle("Dashboard");
    }
    // Validating if the button is disabled
    async clickConfirmIfTheButtonIsDisabled() {
        await expect(this.confirmIfTheButtonIsDisabled).toBeDisabled();
    }
    // Validating the position of the button
    async clickFindThePositionOfTheSubmitButton() {
        const submitButtonPosition = await this.findThePositionOfTheSubmitButton.boundingBox();
        console.log("Submit button position:", submitButtonPosition);
    }
    // Finding the save button color
    async clickFindTheSaveButton() {
        const saveButtonColor = await this.findTheSaveButton.evaluate((element) => {
            return window.getComputedStyle(element).backgroundColor;
        });
        console.log("Save button color:", saveButtonColor);
    }
    // Finding the height and width of the button
    async clickFindTheHeightAndWidthOfThisButton() {
        const buttonSize = await this.findTheHeightAndWidthOfThisButton.boundingBox();
        console.log("Submit button size:", buttonSize?.height, buttonSize?.width);
    }   
    // Mouse over and confirm the color changed
    async clickMouseOverAndConfirmTheColorChanged() {
        const initialColor = await this.mouseOverAndConfirmTheColorChanged.evaluate((element) => {
            return window.getComputedStyle(element).backgroundColor;
        });
        console.log("Initial color of the button:", initialColor);
        await this.mouseOverAndConfirmTheColorChanged.hover();
        const hoverColor = await this.mouseOverAndConfirmTheColorChanged.evaluate((element) => {
            return window.getComputedStyle(element).backgroundColor;
        }
        );
        console.log("Color of the button on hover:", hoverColor);
    }   
    // Click Image button and click on any hidden button
    async clickClickImageButtonAndClickOnAnyHiddenButton() {
        await this.clickImageButtonAndClickOnAnyHiddenButton.click();
        const hiddenButton = this.page.locator(`button:has(span:has-text("Hidden Button"))`);  
        await hiddenButton.click();
    }
        // How many rounded buttons are there
    async clickHowManyRoundedButtonsAreThere() {
        const roundedButtons = this.page.locator(`button.rounded-button`);  //    //button[contains(@class,'rounded-button')]
        const count = await roundedButtons.count();
        console.log("Number of rounded buttons:", count);
    }

}