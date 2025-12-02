// Placeholder file
import { test, expect } from '@playwright/test';

import { CoursesPage } from '../../pages/courses.page.ts';
import { CurriculumPage } from '../../pages/curriculum.page.ts';
import { LoginPage } from '../../pages/login.page.ts';
import { NavigationBarPage } from '../../pages/navigationBar.page.ts';

import users from '../../fixtures/users.json';

test.describe('Update a course (by updating a lesson)', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the page specified in the baseURL in config
        await page.goto('/');
    });

    test('Update a course through the courses page in the left sidebar', async ({ page }) => {
        /** Arrange */
        // Initialize page objects
        const coursesPage = new CoursesPage(page);
        const curriculumPage = new CurriculumPage(page);
        const loginPage = new LoginPage(page);
        const navigationBarPage = new NavigationBarPage(page);

        // Initialize test data
        const newChapterTitle = 'A Quick Introduction to Journaling';

        /** Act */
        // Use login function
        await loginPage.login(users.testUser.email, users.testUser.password);

        // From the homepage dashboard, go to the left side navigation bar and click 'Products' > 'Courses'
        await navigationBarPage.navigateToCourses();
        // Click a course
        await coursesPage.courseCard.click();
        // Click a chapter within a chapter card
        await curriculumPage.chapterCard.first().click();
        // Edit the title of the chapter
        await curriculumPage.chapterTitleInput.fill(newChapterTitle);
        // Click the 'Save chapter' button
        await curriculumPage.chapterSaveButton.click();

        /** Assert */
        // Verify that the course has been updated
        // Should see chapter title change
        await expect(curriculumPage.chapterTitleInput).toHaveValue(newChapterTitle);
        // Should see notification appear 'Successfully saved the chapter'
        // FIXME: Notification toast disappears quickly?
        // await expect(page.getByText('Successfully saved the chapter')).toBeVisible();
    });
});
