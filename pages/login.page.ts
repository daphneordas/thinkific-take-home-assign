import { expect, type Locator, type Page } from '@playwright/test';

export class Login {
    readonly page: Page;
    readonly signInLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInLink = page.locator('a', { hasText: 'Sign In' });
        this.emailInput = page.locator('#user[email]');
        this.passwordInput = page.locator('#user[password]');
    }
}
