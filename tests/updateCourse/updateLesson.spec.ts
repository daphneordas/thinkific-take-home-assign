import { test, expect } from '@playwright/test';

import { CoursesPage } from '../../pages/courses.page.ts';
import { CurriculumPage } from '../../pages/curriculum.page.ts';
import { HomepagePage } from '../../pages/homepage.page.ts';
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
        const homepagePage = new HomepagePage(page);
        const loginPage = new LoginPage(page);
        const navigationBarPage = new NavigationBarPage(page);

        // Initialize test data
        const newLessonTitle = 'The Super Interesting History of Journaling';

        /** Act */
        // Use login function
        await loginPage.login(users.testUser.email, users.testUser.password);

        // Wait for homepage dashboard to load
        await homepagePage.homepageHeader.waitFor();

        // From the homepage dashboard, go to the left side navigation bar and click 'Products' > 'Courses'
        await navigationBarPage.navigateToCourses();
        // Click a course
        await coursesPage.courseCard.click();
        // Click a lesson within a chapter card
        await curriculumPage.lessonCard.first().click();
        // Edit the title of the lesson
        await curriculumPage.lessonTitleInput.fill(newLessonTitle);
        // Click the 'Save lesson' button
        await curriculumPage.lessonSaveButton.click();

        /** Assert */
        // Should see lesson title change
        await expect(curriculumPage.lessonTitleInput).toHaveValue(newLessonTitle);

        // Should see notification appear 'Successfully saved your lesson'
        // FIXME: Notification toast disappears quickly?
        // await expect(page.getByText('Successfully saved your lesson')).toBeVisible();
    });

    // TODO: Clean up - reset data
    // test.afterEach(async ({ page }) => {
    //     // Reset the title of the lesson back to 'The History of Journaling'
    // });
});
