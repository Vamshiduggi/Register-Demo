import { expect, test } from "@playwright/test";

test(`testing  PNR application`, async ({ page }) => {
    await page.goto(`https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en`);
    await page.locator(`//a[contains(@href,"TrainBetweenImportantStations.html?locale=en")]`).click();
    await page.locator(`[title="Select date"]`).click();
    await page.locator(`//td[@data-month="3"]/a[text()='28']`).click();
    await page.locator(`#sourceStation`).fill(`MGR CHENNAI CTL - MAS`);
    await page.locator(`#sourceStation`).press(`Enter`);
    await page.locator(`#destinationStation`).fill(`HYDERABAD DECAN - HYB`);
    await page.locator(`#destinationStation`).press(`Enter`);;
    await page.locator(`[id="firstCondition"] input`).click();
    await page.waitForTimeout(5000);
    await page.locator(`#test`).click();
    await expect(page.locator(`[data-toggle="table"]`)).toBeVisible();
    const trains =await page.locator(`//table[@data-toggle="table"]/tbody/tr`).count();
        for (let i = 1; i <= trains; i++) {
            const xpath = `(//a[@id="clicked_link"])[${i}]`;
            const locator = page.locator(xpath);    
            for (let j = 1; j <= 4; j++) {
                const classXpath = `((//a[@id="clicked_link"])[${i}]/../../td[15]/a/u)[${j}]`;
                const classLocator = page.locator(classXpath);      
                    if (await classLocator.isVisible()) {
                        await classLocator.click();
                        await page.waitForTimeout(3000);
                    }
                }
        }

    });



































































   // const count = await page.locator(`#clicked_link`).count();
    // ((//a[@id="clicked_link"])[${i}]/../../td[15]/a)[${i}]
    // for (let i = 1; i <= count; i++) {
    //     const xpath = `((//a[@id="clicked_link"])[${i}]/../../td[15]/a)[${i}]`;
    //     const locator = page.locator(xpath);
    //     if (await locator.isVisible()) {
    //         await locator.click();
    //         await page.waitForTimeout(3000);
    //     }
    // }   

    // const trains = ['PDY KCG EXP', 'MAS CHZ SF EXP', 'CHARMINAR SF EXP'];
    // const classes = ['SL', '1A', '2A', '3A'];
    // let i = 0;
    // while (i < trains.length) {
    //     let j = 0;
    //     while (j < classes.length) {
    //         const xpath = `//td[text()='${trains[i]}']/following-sibling::td[13]/a/u[text()='${classes[j]}']`;
    //         const locator = page.locator(xpath);
    //         if (await locator.isVisible()) {
    //             await locator.click();
    //             await page.waitForTimeout(3000);
    //         }
    //         j++;
    //     }
    //     i++;
    // }