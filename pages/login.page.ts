import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    /** Selectors */

    readonly signInLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInLink = page.locator('a', { hasText: 'Sign In' });
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
    }

    /** Methods */

    /**
     * Login with a email and password
     * @param {string} email - User's email
     * @param {string} password - User's password.
     */
    async login(email: string, password: string) {
        await this.signInLink.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }
}
