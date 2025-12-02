import { test, expect } from '@playwright/test';

import { CoursesPage } from '../../pages/courses.page.ts';
import { CurriculumPage } from '../../pages/curriculum.page.ts';
import { HomepagePage } from '../../pages/homepage.page.ts';
import { LoginPage } from '../../pages/login.page.ts';
import { NavigationBarPage } from '../../pages/navigationBar.page.ts';

import users from '../../fixtures/users.json';

test.describe('Create a blank course (from the left side navigation bar)', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the page specified in the baseURL in config
        await page.goto('/');
    });

    test('Create a blank course through the courses page in the left sidebar', async ({ page }) => {
        /** Arrange */
        // Initialize page objects
        const coursesPage = new CoursesPage(page);
        const curriculumPage = new CurriculumPage(page);
        const homepagePage = new HomepagePage(page);
        const loginPage = new LoginPage(page);
        const navigationBarPage = new NavigationBarPage(page);

        /** Act */
        // Use login function
        await loginPage.login(users.testUser.email, users.testUser.password);

        // Wait for homepage dashboard to load
        await homepagePage.homepageHeader.waitFor();

        // From the homepage dashboard, go to the left side navigation bar and click 'Products' > 'Courses'
        await navigationBarPage.navigateToCourses();
        // Click the + New Course button
        await coursesPage.newCourseButton.click();
        // Click Create Blank Product button
        await coursesPage.createBlankProductButton.click();
        // Fill in course name
        await coursesPage.createCourseInput.fill(`Test Blank Course ${Date.now()}`);
        // Click Create Course button
        await coursesPage.createCourseButton.click();

        /** Assert */
        // Verify that the course has been created

        // Should see notification appear 'Course successfully created'
        // FIXME: Notification toast disappears quickly?
        // await expect(page.getByText('Course successfully created')).toBeVisible();

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
