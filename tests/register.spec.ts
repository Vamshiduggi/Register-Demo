import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/registerPage';

test.describe('Registration Flow', () => {

    test('should fill form and validate submission state', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        // 1. Open Register Page
        await registerPage.goto();

        // 2. Fill Form
        const testUser = {
            firstName: 'Vamshi',
            lastName: 'Duggi',
            address: '123 Hyderabad, Tech City',
            email: `vamshi${Date.now()}@test.com`, // Unique email
            phone: '1234567890',
            skill: 'Javascript',
            dobYear: '2003',
            dobMonth: 'January',
            dobDay: '1',
            password: 'Password123!',
        };

        await registerPage.fillRegistrationForm(testUser);
        await registerPage.submit();
        await expect(page.locator(`[href="WebTable.html"]`)).toHaveText('WebTable');
    });
});