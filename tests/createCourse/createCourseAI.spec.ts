import { test, expect } from '@playwright/test';

import { CurriculumPage } from '../../pages/curriculum.page.ts';
import { HomepagePage } from '../../pages/homepage.page.ts';
import { LoginPage } from '../../pages/login.page.ts';

import users from '../../fixtures/users.json';

test.describe('Create a course with AI (from the left side navigation bar)', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the page specified in the baseURL in config
        await page.goto('/');
    });

    test('Create a course generated with AI through the courses page in the sidebar', async ({ page }) => {
        /** Arrange */
        // Initialize page objects
        const curriculumPage = new CurriculumPage(page);
        const homepagePage = new HomepagePage(page);
        const loginPage = new LoginPage(page);

        // Initialize test data
        const courseDescription =
            'This course is to teach you about making journaling a habit.' +
            'We will explain the history of journaling, its benefits, and the different types of journaling.';

        /** Act */
        // Use login function
        await loginPage.login(users.testUser.email, users.testUser.password);

        // From the homepage dashboard, click the '+ Create' button on the top right
        await homepagePage.createButton.click();
        // Click the 'Course' button
        await homepagePage.chooseProductInModal('Course');
        // In the text box input, type the course description so that AI generates course content
        await homepagePage.createCourseInput.fill(courseDescription);
        // Click the 'Create' button
        await homepagePage.createCourseButton.click();

        /** Assert */
        // Verify that the course has been created
        // Should see 'Drafting course...'
        await expect(page.getByText('Drafting course...')).toBeVisible();
        // Should land on the landing page (URL contains landing_page)
        await page.waitForURL('**/landing_page?generated=1');
        // Click on Curriculum > Should have Chapters and Lessons
        await curriculumPage.curriculumTab.click();
        await expect(curriculumPage.chapterCard.first()).toBeVisible();
        await expect(curriculumPage.lessonCard.first()).toBeVisible();
    });
});
