import { type Locator, type Page } from '@playwright/test';

export class NavigationBarPage {
    readonly page: Page;

    /** Selectors */

    // Navigation links
    readonly homeLink: Locator;

    readonly productsLink: Locator;
    // Links under products accordion
    readonly coursesLink: Locator;
    // readonly communitiesLink: Locator; etc;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.locator('a', { hasText: 'Home' });
        this.productsLink = page.getByTestId('toga-product-icon-manage__path');
        this.coursesLink = page.locator('a', { hasText: 'Courses' });
    }

    /** Methods */

    /** Navigate to the courses page through the navigation bar
     */
    async navigateToCourses() {
        await this.productsLink.click();
        await this.coursesLink.click();
    }
}
