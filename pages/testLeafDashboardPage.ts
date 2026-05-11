import { Page, Locator } from "@playwright/test";
export class TestLeafDashboardPage {
    readonly page: Page;
    // readonly weeklyTask: Locator;
    readonly emailAddress: Locator;
    readonly message: Locator;


    constructor(page: Page) {
        this.page = page;
        // this.weeklyTask = this.page.locator(`//span[text()="Daily Quiz"]/parent::li/div[1]/div[1]/div[2]`);
        this.emailAddress = this.page.locator(`[placeholder="E-mail Address"]`);
        this.message = this.page.locator(`[placeholder="Write your message..."]`);

    }
    async goto() {
        await this.page.goto("https://www.leafground.com/dashboard.xhtml");
    }

    async fillEmailAddress(email: string) {
        await this.emailAddress.fill(email);
    }

    async fillMessage(message: string) {
        await this.message.fill(message);
    }

    async checkWeeklyTaskByName(page: Page, taskName: string): Promise<void> {
        const checkbox = page.locator(`//span[text()="${taskName}"]/parent::li/div[1]/div[2]`)
        await checkbox.click();
    }
}       