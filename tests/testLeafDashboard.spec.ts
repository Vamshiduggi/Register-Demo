import {TestLeafDashboardPage} from "../pages/testLeafDashboardPage";
import {test} from "@playwright/test";  

test.describe("Test Leaf Dashboard",()=>{
    let testLeafDashboardPage: TestLeafDashboardPage;   
    test.beforeEach(async({page})=>{
        testLeafDashboardPage = new TestLeafDashboardPage(page);
        await testLeafDashboardPage.goto();
    });

    test("Check Task By Name",async({page})=>{
        testLeafDashboardPage = new TestLeafDashboardPage(page);
        await testLeafDashboardPage.goto();
        await testLeafDashboardPage.fillEmailAddress(`vamshiduggi@gmail.com`);
        await testLeafDashboardPage.fillMessage(`Hello, I am Vamshi Duggi. I am learning Playwright with TypeScript. This is my first test case.`);
        await testLeafDashboardPage.checkWeeklyTaskByName(page, "Daily Quiz");    
    });
}); 