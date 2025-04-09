import { Page, expect } from '@playwright/test';
import BasePage from '../base/basePage';


export default class AccountPage extends BasePage {
    private accountCreatedTxt = "//b[normalize-space(text())='Account Created!']"
    private continueBtn = "//a[@data-qa='continue-button']"
    private loggedInAsTxt = (username: string) => `//a[contains(normalize-space(.), 'Logged in as')]/b[contains(normalize-space(.) , '${username}')]`
    private deleteBtn = "//a[normalize-space(text())='Delete Account']"
    private accountDeletedTxt = "//b[normalize-space(text())='Account Deleted!']"

    constructor(public page: Page) {
		super(page);
	}

    async verifyAccountCreated(){
        await this.expectToBeVisible(this.accountCreatedTxt)
    }

    async clickContinueButton(){
        await this.click(this.continueBtn)
    }

    async verifyLoggedInAsUsername(username){
        const locator = this.loggedInAsTxt(username);
        await this.expectToBeVisible(locator);
    }

    async clickDeleteAccountButton(){
        await this.click(this.deleteBtn)
    }

    async verifyAccountDeleted(){
        await this.expectToBeVisible(this.accountDeletedTxt)
    }

    
    
}