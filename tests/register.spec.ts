import { generateRandomEmail} from './../utils/dataUtils';
import { test, expect } from '@playwright/test';
import * as data from './../testdata/data.register.json';
import AccountPage from '../pages/AccountPage';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/registerPage';


let url: string;
let homePage: HomePage;
let registerPage: RegisterPage;
let accountPage: AccountPage;

test('test register new account',async ({ page, baseURL }) => {
    url = `${baseURL}`;
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    accountPage = new AccountPage(page);

    const randomEmail = generateRandomEmail();
    const testData = { ...data, email: randomEmail};

    await homePage.openHomepage(url);
    await homePage.homepageLoaded();
    await homePage.clickSignupLogin();

    await registerPage.verifyNewUserSignupVisible();
    await registerPage.createNewAccount(testData.username, testData.email);
    await registerPage.verifyEnterAccountInformationVisible();
    await registerPage.fillAccountInformation(testData.email, testData.day, testData.month, testData.year );
    await registerPage.selectNewLetterCheckbox();
    await registerPage.selectOfferCheckbox();
    await registerPage.fillAddressInformation(testData.firstname, testData.lastname, testData.company, testData.address1, testData.address2, testData.country, testData.state, testData.city, testData.zipcode, testData.mobileNumber);
    await registerPage.clickCreateButton();

    await accountPage.verifyAccountCreated();
    await accountPage.clickContinueButton();
    await accountPage.verifyLoggedInAsUsername(testData.username);
    await accountPage.clickDeleteAccountButton();
    await accountPage.verifyAccountDeleted();
    await accountPage.clickContinueButton();
});


