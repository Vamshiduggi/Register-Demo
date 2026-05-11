import { Page, Locator } from "@playwright/test";

export class QATest {
    page: Page;
    readonly searchByPayee: Locator;
    readonly searchByAccount: Locator;
    readonly searchByType: Locator;
    readonly searchByExpenditurePayee: Locator;
    readonly table: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchByPayee = page.locator(`[placeholder="Payee Name"]`);
        this.searchByAccount = page.locator(`[ng-model="filterTxn.account"]`);
        this.searchByType = page.locator(`[ng-model="filterTxn.txnType"]`);
        this.searchByExpenditurePayee = page.locator(`[ng-model="searchCriteria"]`);
        this.table = page.locator(`.table`);
    }

    async goto() {
        await this.page.goto(`https://www.globalsqa.com/angularJs-protractor/SearchFilter/`);
    }

    async searchByPayeeName(payeeName: string) {
        await this.searchByPayee.fill(payeeName);
    }

    async searchByAccountName(accountName: string) {
        await this.searchByAccount.selectOption(accountName);
    }

    async searchByTypeName(typeName: string) {
        await this.searchByType.selectOption(typeName);
    }
    async searchByExpenditurePayeeName(expenditurePayeeName: string) {
        await this.searchByExpenditurePayee.fill(expenditurePayeeName);
    }
}