import { expect, type Locator, type Page } from '@playwright/test';

export class NavigationBarPage {
    readonly page: Page;

    // Navigation links
    readonly homeLink: Locator;

    readonly productsLink: Locator;
    // Links under products accordion
    readonly coursesLink: Locator;
    // readonly communitiesLink: Locator; etc;

    // readonly channelsLink: Locator;
    // Links under channels accordion

    // readonly marketingLink: Locator;
    // Links under marketing accordion

    // readonly salesLink: Locator;
    // Links under sales accordion

    // readonly usersLink: Locator;
    // Links under users accordion

    // readonly analyticsLink: Locator;
    // Links under analytics accordion

    // readonly accountLink: Locator;
    // readonly integrationsLink: Locator;
    // readonly settingsLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.locator('a', { hasText: 'Home' });
        this.productsLink = page.locator('a', { hasText: 'Products' });
        this.coursesLink = page.locator('a', { hasText: 'Courses' });
    }
}
