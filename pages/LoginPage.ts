import { Page, expect } from '@playwright/test';
import BasePage from '../base/basePage';


export default class LoginPage extends BasePage {
   private loginToYourAccountTxt = "//h2[normalize-space(text())='Login to your account']"
   private emailTxt = "(//input[@name='email'])[1]"
   private passwordTxt = "input[name='password']"
   private loginBtn = "button[data-qa='login-button']"


    constructor(public page: Page) {
		super(page);
	}

    async verifyLoginToYourAccount() {
        await this.expectToBeVisible(this.loginToYourAccountTxt)
    }

    async clickLoginButton() {
       await this.click(this.loginBtn)
        
    }

    async fillUserAccount(email, password) {
        await this.input(this.emailTxt, email)
        await this.input(this.passwordTxt, password)
    }

}