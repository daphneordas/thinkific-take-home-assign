import { test, expect } from '@playwright/test';

import { CurriculumPage } from '../../pages/curriculum.page.ts';
import { HomepagePage } from '../../pages/homepage.page.ts';
import { LoginPage } from '../../pages/login.page.ts';

import users from '../../fixtures/users.json';

test.describe('Create a course (from the homepage dashboard)', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the page specified in the baseURL in config
        await page.goto('/');
    });

    test('Create a blank course through the + Create button on the homepage dashboard', async ({ page }) => {
        /** Arrange */
        // Initialize page objects
        const curriculumPage = new CurriculumPage(page);
        const homepagePage = new HomepagePage(page);
        const loginPage = new LoginPage(page);

        /** Act */
        // Use login function
        await loginPage.login(users.testUser.email, users.testUser.password);

        // From the homepage dashboard, click the '+ Create' button on the top right
        await homepagePage.createButton.click();
        // Click the 'Course' button
        await homepagePage.chooseProductInModal('Course');
        // Click 'Skip - Create blank product'
        await homepagePage.createBlankProductButton.click();

        /** Assert */
        // Verify that the course has been created
        // Should land on the curriculum page with the empty chapter container showing
        await expect(curriculumPage.emptyContainerHeader).toBeVisible();
        // Should see 'Add Chapter' button
        await expect(curriculumPage.addChapterButton).toBeVisible();
        // Should have no chapters and lessons
        await expect(curriculumPage.chapterCard).toHaveCount(0);
        await expect(curriculumPage.lessonCard).toHaveCount(0);
    });

    // TODO: Clean up test account by deleting the created blank course
    // test.afterEach(async ({ page }) => {
    //     // Delete the blank course created
    // });
});
