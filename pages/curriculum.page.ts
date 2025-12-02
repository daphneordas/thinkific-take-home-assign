import { type Locator, type Page } from '@playwright/test';

export class CurriculumPage {
    readonly page: Page;

    /** Selectors */

    readonly curriculumTab: Locator;
    readonly addChapterButton: Locator;
    readonly chapterNameInput: Locator;
    readonly addChapterSaveButton: Locator;
    readonly emptyContainerHeader: Locator;
    readonly chapterCard: Locator;
    readonly lessonCard: Locator;
    readonly chapterTitleInput: Locator;
    readonly chapterSaveButton: Locator;
    readonly lessonTitleInput: Locator;
    readonly lessonSaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.curriculumTab = page.getByTestId('nav-item__curriculum');
        this.addChapterButton = page.getByTestId('add-chapter__btn');

        // Add chapter container
        this.chapterNameInput = page.getByTestId('chapter-name__input');
        this.addChapterSaveButton = page.getByTestId('save-block-action-button');

        // Empty chapter container
        this.emptyContainerHeader = page.locator('h1', { hasText: 'Add a first chapter' });

        // Left sidebar curriculum
        this.chapterCard = page.getByTestId('accordion-title');
        this.lessonCard = page.getByTestId('curriculum-lesson-card');

        //Edit chapter container
        this.chapterTitleInput = page.getByTestId('chapter-name__input');
        this.chapterSaveButton = page.getByTestId('save-block-action-button');

        // Edit lesson container
        this.lessonTitleInput = page.getByTestId('lesson-form-title-field');
        this.lessonSaveButton = page.getByTestId('actions-bar__save-button');
    }

    /** Methods */
}
