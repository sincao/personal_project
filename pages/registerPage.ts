import { Page, expect } from '@playwright/test';
import BasePage from '../base/basePage';


export default class RegisterPage extends BasePage {
    private newUserSignupTxt = "//h2[normalize-space(text())='New User Signup!']"
    private nameTxt = "//input[@data-qa='signup-name']"
    private emailTxt = "//input[@data-qa='signup-email']"
    private signupBtn = "//button[@data-qa='signup-button']"
    private enterAccountInfo = "//b[normalize-space(text())='Enter Account Information']"

    constructor(public page: Page) {
		super(page);
	}

    async verifyNewUserSignupVisible(){
        await this.expectToBeVisible(this.newUserSignupTxt)
    }

    async createNewAccount(name,email){
        await this.input(this.nameTxt, name)
        await this.input(this.emailTxt, email)
        await this.click(this.signupBtn)
    }
    async verifyEnterAccountInformationVisible(){
        await this.expectToBeVisible(this.enterAccountInfo)
    }

}
