import { Page ,Locator,expect} from "@playwright/test";
export class Checkbox{
    page:Page;
    readonly basic:Locator;
    readonly ajax:Locator;
    readonly java:Locator;
    readonly python:Locator;
    readonly javascript:Locator;
    readonly csharp:Locator;
    readonly others:Locator;
    readonly tristatecheckbox:Locator;
    readonly toggleswitch:Locator;
    readonly verifycheckbox:Locator;
    readonly selectMultiple:Locator;

    constructor(page:Page){
        this.page=page;
        this.basic=this.page.locator(`//span[text()="Basic"]/preceding-sibling::div[1]`);
        this.ajax=this.page.locator(`//span[text()="Ajax"]/preceding-sibling::div[1]`);
        this.java=this.page.locator(`//label[text()="Java"]/preceding-sibling::div/div[2]`);
        this.python=this.page.locator(`//label[text()="Python"]/preceding-sibling::div/div[2]`);
        this.javascript=this.page.locator(`//label[text()="Javascript"]/preceding-sibling::div/div[2]`);
        this.csharp=this.page.locator(`//label[text()="C-Sharp"]/preceding-sibling::div/div[2]`);
        this.others=this.page.locator(`//label[text()="Others"]/preceding-sibling::div/div[2]`);
        this.tristatecheckbox=this.page.locator(`//H5[text()="Tri State Checkbox"]/following-sibling::div/div/div/div[2]`);
        this.toggleswitch=this.page.locator(`//h5[text()="Toggle Switch"]/following-sibling::div`);
        this.verifycheckbox=this.page.locator(`[aria-disabled="true"][ type="checkbox"] `);
        this.selectMultiple=this.page.locator(`[aria-haspopup="listbox"]`);
    }

    async goto(){
        await this.page.goto(`https://www.leafground.com/checkbox.xhtml;jsessionid=node09qkemj4oof851xzfwgjpuvobs15299932.node0`);
    }
    async basicCheckbox(){
        await this.basic.click();
    }
    async isNotificationVisible(){
        await this.ajax.dblclick();
        // await this.ajax.click();
        // await expect(this.page.locator(`//span[text()="Checked"]`)).toBeVisible();
        await expect(this.page.locator(`//span[text()="Unchecked"]`)).toBeVisible();

    }
    async favLanguage(){
        await this.java.click();
        await this.python.click();
        await this.javascript.click();
        await this.csharp.click();
        await this.others.click();
    }
    async tristateCheckbox(){
        // await this.tristatecheckbox.click();
        // expect(this.tristatecheckbox.locator(`.ui-icon-check`)).toBeVisible();
        await this.tristatecheckbox.dblclick();
        expect(this.tristatecheckbox.locator(`.ui-icon-closethick`)).toBeVisible();
        // await this.tristatecheckbox.dblclick();
        // expect(this.tristatecheckbox.locator(`.ui-icon-minus`)).toBeVisible();
    }
    async toggleSwitch(){
        await this.toggleswitch.click();
        await this.page.waitForTimeout(4000);
        expect(this.page.locator(`//span[text()="Checked"]`)).toBeVisible();
    }   
    async verifyCheckbox(){
        await expect(this.verifycheckbox).toBeDisabled();
            
    }   
    async selectMultiples(){
        await this.selectMultiple.click();
        await this.page.waitForTimeout(4000);
        await this.page.locator(`//li[@data-item-value="Miami"]/div/div[2]`).click();
        await this.page.locator(`//li[@data-item-value="London"]/div/div[2]`).click();
        await this.page.locator(`//li[@data-item-value="Paris"]/div/div[2]`).click();
        await this.page.locator(`//li[@data-item-value="Istanbul"]/div/div[2]`).click();
        await this.page.locator(`//li[@data-item-value="Barcelona"]/div/div[2]`).click();
    }

}
