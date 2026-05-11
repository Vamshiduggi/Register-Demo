import { test } from "@playwright/test";
import { Drag } from "../../pages/Zpages/dragPage";
test(`Drag and Drop`, async ({ page }) => {
    const drag = new Drag(page);
    await drag.goto();
    await drag.dragAndDrop();
});


