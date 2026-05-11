import { test,expect } from "@playwright/test"
import { DetailsPageImpl } from "../pages/detailsPage"
import { HobbiesPage } from "../pages/hobbiesPage";
import { Skills } from "../pages/skillsPage";
import { FileInput } from "../pages/fileInputPage";
import { Gender } from "../pages/genderPage";
import {Address} from "../pages/addressPage"
import { MultipeElements } from "../pages/multipleElementsPage";
import { Home } from "../pages/homePage";
import { FramesPage } from "../pages/framesPage";
import { TextValue } from "../pages/textValuePage";
import { RegisterNavigationPage } from "../pages/textLocatorPage";
import { Hover } from "../pages/hoverPage23";
import { Validate } from "../pages/validateTextPage";
import { ElementVisible } from "../pages/elementVerify22";
import { Reusable } from "../pages/reusablePage21";
// Test to fill the details form
test.describe.serial(`Parralell`,async()=>{
test("Fill the details form", async ({ page }) => {
    const detailsPage = new DetailsPageImpl(page)
    await detailsPage.goto();
    await detailsPage.fillFirstName()
    await detailsPage.fillLastName()
    await detailsPage.fillEmail()
})

// Test to verify hobbies are selected
test("Verify hobbies are selected", async ({ page }) => {
    const hobbiesPage = new HobbiesPage(page);
    await hobbiesPage.goto();
    await hobbiesPage.selectCricket();
    await hobbiesPage.selectMovies();
    await hobbiesPage.selectHockey();
    await hobbiesPage.selectAllHobbies();
})

test('Select Skills by visible text and assert value using POM', async ({ page }) => {
    const skillsPage = new Skills(page);
    await skillsPage.goto();
    await skillsPage.selectSkillsByVisibleText('Javascript');
    await skillsPage.assertSkillsSelected('Javascript');
})
test(`verify file is Uploded or not`,async({page})=>{
    const filePage= new FileInput(page);
    await filePage.goto();
    await filePage.uploadFile();
})
test(`select male `, async ({ page }) => {
    const genderMale = new Gender(page);
    await genderMale.goto();
    await genderMale.selectMale();  
    await genderMale.assertMaleSelected();
  });

  test(`select female`, async ({ page }) => {
    const genderFemale = new Gender(page);
    await genderFemale.goto();
    await genderFemale.selectFemale();
    await genderFemale.assertFemaleSelected();
  });

  test(`Validating address`,async({page})=>{
    const addressss=new Address(page);
    await addressss.goto();
    await addressss.fillAddress(`Hyderabad,Telangana 500510`);
    await addressss.assertAddress(`Hyderabad,Telangana 500510`);
  })
test(`Verify to click first elemet`,async({page})=>{
    const multipleElements=new MultipeElements(page);
    await multipleElements.goto();
    // 9 test
    // await multipleElements.selectFirstElement();
    // 18 test
    await multipleElements.selectThirdElement();
})

test(`Validate title and Url`,async({page})=>{
    const home=new Home(page);
    await home.goto();
    await home.goToHome();
    await home.validateTitle();
    await home.validateUrl();

})
test('Interact with textbox in single iframe using POM', async ({ page }) => {
  const framesPage = new FramesPage(page);
  await framesPage.goto();
  await framesPage.gotoSwitch();
  await framesPage.goToFrame();
  await framesPage.enterTextbox('Hello Playwright!');
  const value = await framesPage.getTextboxValue();
  await expect(value).toBe('Hello Playwright!');
});

// 19
test(`getting allTextContents`,async({page})=>{
    const text=new TextValue(page);
    await text.goto();
    await text.getAllTextContent();

})

// 20
test('Click Register link with text locator and validate form section', async ({ page }) => {
    const navPage = new RegisterNavigationPage(page);
    await navPage.gotoHome();
    await navPage.clickRegisterLink();
    await navPage.validateRegisterFormVisible();
  });

// 23

test(`hover and click subMenu`,async({page})=>{
    const hover=new Hover(page);
    await hover.goto();
    await hover.goToHover();
    await hover.selectSubMenu();
})


// 38
test(`validating element`,async({page})=>{
    const validate=new Validate(page);
    await validate.goto();
    await validate.validatingElement();

})
// 22
test(`Verifying element visibility and enabled`,async({page})=>{
    const element=new ElementVisible(page);
    await element.goto();
    await element.isElementVisible();
    await element.isElementEnabled();

})

// 21
test.only(`Verify to select dropdown element`,async({page})=>{
    const reusable=new Reusable(page);
    await reusable.goto();
    await reusable.selectElement(`Adobe InDesign`);

})






























































});