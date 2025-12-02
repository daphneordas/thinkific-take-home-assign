import { type Locator, type Page } from '@playwright/test';

export class CoursesPage {
    readonly page: Page;

    /** Selectors */

    readonly newCourseButton: Locator;
    readonly createBlankProductButton: Locator;
    readonly courseCard: Locator;
    readonly createCourseInput: Locator;
    readonly createCourseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newCourseButton = page.getByTestId('create-product-modal-button');
        this.courseCard = page.getByText('Mastering the Habit of Journaling');

        // New course container
        this.createBlankProductButton = page.getByLabel('Choose Blank template');

        // New course pop up
        this.createCourseInput = page.getByTestId('product-name__input');
        this.createCourseButton = page.getByTestId('create-course__btn');
    }

    /** Methods */
}
