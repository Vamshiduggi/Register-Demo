import{Page,Locator,expect} from "@playwright/test";

export class Home{
    page:Page;
    readonly home:Locator
    
    constructor(page:Page)
    {
       this.page=page;
       this.home=page.locator(`[href="Index.html"]`)
      
    }

    async goto(){
        await this.page.goto(`${process.env.baseUrl}`);

    }
    async goToHome()
    {
        await this.home.click();
    }

    async validateTitle(){
        await expect(this.page).toHaveTitle(`Index`)
    }
    async validateUrl(){
        await expect(this.page).toHaveURL(`https://demo.automationtesting.in/Index.html`);
    }
}