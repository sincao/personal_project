import { Page, expect } from '@playwright/test';
import BasePage from '../base/basePage';


export default class RegisterPage extends BasePage {
    private newUserSignupTxt = "//h2[normalize-space(text())='New User Signup!']"
    private nameTxt = "//input[@data-qa='signup-name']"
    private emailTxt = "//input[@data-qa='signup-email']"
    private signupBtn = "//button[@data-qa='signup-button']"
    private enterAccountInfoTxt = "//b[normalize-space(text())='Enter Account Information']"
    private mrsRad = "#id_gender2";
    private passwordTxt = "#password"
    private dayDdl = "#days"
    private monthDdl = "#months"
    private yearDdl = "#years"
    private newLetterCheckbox = "#newsletter"
    private offerCheckbox = "#optin"
    private firstNameTxt = "#first_name"
    private lastNameTxt = "#last_name"
    private companyTxt = "#company"
    private address1Txt = "#address1"
    private address2Txt = "#address2"
    private countryDdl = "#country"
    private statTxt = "#state"
    private cityTxt = "#city"
    private zipcodeTxt = "#zipcode"
    private mobileNumberTxt = "#mobile_number"
    private createBtn = "button[data-qa='create-account']"
    private emailExistedTxt = "//p[normalize-space(text())='Email Address already exist!']"



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
        await this.expectToBeVisible(this.enterAccountInfoTxt)
    }

    async fillAccountInformation(passsword, day, month, year){
        await this.click(this.mrsRad)
        await this.input(this.passwordTxt, passsword)
        await this.selectOptionByValue(this.dayDdl, day)
        await this.selectOptionByValue(this.monthDdl, month)
        await this.selectOptionByValue(this.yearDdl, year)
    }

    async selectNewLetterCheckbox(){
        await this.checkOnCheckbox(this.newLetterCheckbox)
    }

    async selectOfferCheckbox(){
        await this.checkOnCheckbox(this.offerCheckbox)
    }

    async fillAddressInformation(firstname, lastname, company, address1, address2, country, state, city, zipcode, mobileNumber){
        await this.input(this.firstNameTxt,firstname)
        await this.input(this.lastNameTxt, lastname)
        await this.input(this.companyTxt, company)
        await this.input(this.address1Txt, address1)
        await this.input(this.address2Txt, address2)
        await this.selectOptionByValue(this.countryDdl, country)
        await this.input(this.statTxt, state)
        await this.input(this.cityTxt, city)
        await this.input(this.zipcodeTxt, zipcode)
        await this.input(this.mobileNumberTxt, mobileNumber)
    }

    async clickCreateButton(){
        await this.click(this.createBtn)
    }

    async verifyDisplayEmailExisted(){
        await this.expectToBeVisible(this.emailExistedTxt)

    }


}
