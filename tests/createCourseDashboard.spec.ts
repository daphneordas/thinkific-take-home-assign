import { test, expect } from '@playwright/test';

test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the page specified in the baseURL in config
        await page.goto('/');
    });

    test('create a course through the button on the homepage', async ({ page }) => {
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Daph's Site/);

        // use login function

        // on the homepage, click on the + Create button

        // on the popup, click 'Course'

        // in the textbox, type the course description so that AI generates course content

        // click the 'Create' button
        
    });
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
