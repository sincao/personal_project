import { generateRandomEmail } from './../utils/dataUtils';
import { test, expect } from '@playwright/test';
import * as data from './../testdata/data.register.json';
import AccountPage from '../pages/AccountPage';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/registerPage';


let url: string;
let homePage: HomePage;
let registerPage: RegisterPage;
let accountPage: AccountPage;

test('test admin login flow',async ({ page, baseURL }) => {
    url = `${baseURL}`;
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    accountPage = new AccountPage(page);

    const randomEmail = generateRandomEmail();
    const testData = { ...data, email: randomEmail };

    await homePage.openHomepage(url);
    await homePage.homepageLoaded();
    await homePage.clickSignupLogin();

    await registerPage.verifyNewUserSignupVisible();
    await registerPage.createNewAccount(data.username, testData.email);
    await registerPage.verifyEnterAccountInformationVisible();



});
