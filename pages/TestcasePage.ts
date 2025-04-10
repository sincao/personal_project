import { Page, expect } from '@playwright/test';
import BasePage from '../base/basePage';


export default class TestcasePage extends BasePage {

    constructor(public page: Page) {
		super(page);
	}

    async verifyNavigateToTestcasePage(){
        await this.expectUrlContains(/.*test_cases/)
    }
}