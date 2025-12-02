// Placeholder file
// import { test, expect } from '@playwright/test';

// import { LoginPage } from '../../pages/login.page.ts';
// import { NavigationBarPage } from '../../pages/navigationBar.page.ts';

// import users from '../../fixtures/users.json';

// test.describe('Create a course with AI (from the left side navigation bar)', () => {
//     test.beforeEach(async ({ page }) => {
//         // Go to the page specified in the baseURL in config
//         await page.goto('/');
//     });

//     test('Create a course generated with AI through the courses page in the sidebar', async ({ page }) => {
//         /** Arrange */
//         // Initialize page objects
//         const loginPage = new LoginPage(page);
//         const navigationBarPage = new NavigationBarPage(page);

//         /** Act */
//         // Use login function
//         await loginPage.login(users.testUser.email, users.testUser.password);

//         // From the homepage dashboard, go to the left side navigation bar and click 'Products' > 'Courses'
//         await navigationBarPage.navigateToCourses();
//         // In the text box input, type the course description so that AI generates course content
//         // Click the 'Create' button

//         /** Assert */
//         // Verify that the course has been created
//         // Should see 'Drafting course...'
//         // Should land on the landing page (URL contains landing_page)
//         // Course title should contain 'Mastering...'
//         // Click on Curriculum > Should have Chapters and Lessons
//     });
// });
