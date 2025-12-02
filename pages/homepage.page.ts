import {type Locator, type Page } from '@playwright/test';

export class HomepagePage {
    readonly page: Page;

    /** Selectors */

    readonly homepageHeader: Locator;
    readonly createButton: Locator;
    readonly createProductModal: Locator;
    readonly createBlankProductButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homepageHeader = page.locator('h1', { hasText: 'Welcome,' });
        this.createButton = page.getByRole('button', { name: 'Create' });

        // Create Product Modal
        this.createProductModal = page.getByTestId('create-product-modal-contents');

        // Create Course AI Page
        this.createBlankProductButton = page.getByTestId('product-generator-skip__btn');
    }

    /** Methods */

    /**
     * Choose a product in the create product modal by its index
     * @param {string} product - The name of the product to choose (e.g., 'Digital Download', 'Course', etc.)
     */
    async chooseProductInModal(product: string) {
        await this.createProductModal.getByText(product).click();
    }
}
