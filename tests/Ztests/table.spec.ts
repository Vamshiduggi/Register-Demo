import { test } from "@playwright/test";
import { Table } from "../../pages/Zpages/tablePage";

test.describe(`Validating Table`, () => {
    let table: Table;
    test.beforeEach(async ({ page }) => {
        table = new Table(page);
        await table.goto();
        test(`Validating Table values`, async ({ page }) => {
            await table.Search(`India`);
        });
    });
});