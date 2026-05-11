import { test } from "@playwright/test";
import { FramePage } from "../../pages/Zpages/framePage";

test.describe("Frame page test", () => {
    let framePage: FramePage;
    test.beforeEach(async ({ page }) => {
        framePage = new FramePage(page);
        await framePage.navigateToFramePage();
    });
    test("Click Me Inside Frame Button", async () => {
        await framePage.clickMeInsideFrameButton();
    });
    test("Count Frames Button", async () => {
        await framePage.clickCountFramesButton();
    });
    test("Click Me Inside Nested Frame Button", async () => {
        await framePage.clickMeInsideNestedFrameButton();
    });
});

