import { test } from "@playwright/test";
import { Text } from "../../pages/Zpages/textPage";

test.describe("Validating Dropdowns", () => {
    let text: Text;
    test.beforeEach(`Testing`,async ({ page }) => {
        text = new Text(page);
        await text.goto();
    });
    test(`Validating Which is your favorite UI Automation tool? Dropdown`, async ({ page }) => {
        await text.selectFavautomationTool();
    });
    test(`validating Choose your preferred country.`,async({page})=>{
        await text.choosePreferredCountry(`India`);
    });
    test(`Validating Confirm Cities belongs to Country is loaded`,async({page})=>{
        await text.choosePreferredCountry(`India`);
        await text.selectCountryIsLoaded(`Chennai`);
    })
    test(`Validating Choose the Course`,async({page})=>{
        await text.selectChooseTheCoures(`Playwright`);
    });
    test.only(`Validating Choose language randomly`,async({page})=>{
        await text.selectChooseLanguage(`Telugu`);
    });
    test(`Validating Select 'Two' irrespective of the language chosen`,async({page})=>{
        await text.selectChooseLanguage(`English`);
        await text.selectTwo(`English`);
    });
});