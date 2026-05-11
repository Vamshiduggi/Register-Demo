import {test,expect } from "@playwright/test";
import { QATest } from "../pages/qatest";

test.describe("QA Test",()=>{
    let qaTest: QATest;
    test.beforeEach(async({page})=>{
        qaTest = new QATest(page);
        await qaTest.goto();
    });

    test("Search by Payee Name",async()=>{
        await qaTest.searchByPayeeName("H");
        const rowCount = await qaTest.table.locator("tbody tr").count();
        console.log(`Number of rows after searching by Payee Name: ${rowCount}`);
    });

    test("Search by Account Name",async()=>{
        await qaTest.searchByAccountName("All Accounts");
        const rowCount = await qaTest.table.locator("tbody tr").count();
        console.log(`Number of rows after searching by Account Name: ${rowCount}`);
    });

    test("Search by Type Name",async()=>{
        await qaTest.searchByTypeName("EXPENDITURE");
        const rowCount = await qaTest.table.locator("tbody tr").count();
        console.log(`Number of rows after searching by Type Name: ${rowCount}`);
    });

    test("Search by Expenditure Payee Name",async()=>{
        await qaTest.searchByExpenditurePayeeName("s");
        const rowCount = await qaTest.table.locator("tbody tr").count();
        console.log(`Number of rows after searching by Expenditure Payee Name: ${rowCount}`);
    });
});
