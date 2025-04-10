import { Page, expect } from '@playwright/test';
import BasePage from '../base/basePage';


export default class HomePage extends BasePage {
    private homeTxt = "//a[normalize-space(text())='Home']"
    private signupLoginBtn = "//a[normalize-space(text())='Signup / Login']"
    private logoutBtn = "//a[normalize-space(text())='Logout']"
    private testcaseBtn = "//a[normalize-space(text())='Test Cases']"

    constructor(public page: Page) {
		super(page);
	}

    async openHomepage(url){
        await this.navigateTo(url);
    }

    async homepageLoaded(){
        await this.expectToBeVisible(this.homeTxt)
    }

    async clickSignupLogin(){
        await this.click(this.signupLoginBtn);
    }

    async clickLogoutButton(){
        await this.click(this.logoutBtn)
    }

    async clickTestcaseButton(){
        await this.click(this.testcaseBtn)
    }

}