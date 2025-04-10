import { test, expect } from '@playwright/test';
import AccountPage from '../pages/AccountPage';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/registerPage';
import * as data from './../testdata/data.login.json';
import { generateRandomEmail } from '../utils/dataUtils';
import LoginPage from '../pages/LoginPage';


let url: string;
let homePage: HomePage;
let registerPage: RegisterPage;
let accountPage: AccountPage;
let loginPage: LoginPage;

test('test login user with correct email and password',async ({ page, baseURL }) => {
    url = `${baseURL}`;
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    loginPage = new LoginPage(page);
    registerPage = new RegisterPage(page);
    accountPage = new AccountPage(page);

    await homePage.openHomepage(url);
    await homePage.homepageLoaded();
    await homePage.clickSignupLogin();

    await loginPage.verifyLoginToYourAccount();
    await loginPage.fillUserAccount(data.email, data.password);
    await loginPage.clickLoginButton();
    
    await accountPage.verifyLoggedInAsUsername(data.username);

});

test('test login user with incorrect email and password', async ({page,baseURL})=>{
    url = `${baseURL}`;
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    loginPage = new LoginPage(page);
    accountPage = new AccountPage(page);

    await homePage.openHomepage(url);
    await homePage.homepageLoaded();
    await homePage.clickSignupLogin();
    
    await loginPage.verifyLoginToYourAccount();
    await loginPage.fillUserAccount(data.email, data.email);
    await loginPage.clickLoginButton();
    await loginPage.verifyLoginFailed();
})

test.only('test logout user', async ({page, baseURL})=> {
    url = `${baseURL}`;
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    loginPage = new LoginPage(page);
    registerPage = new RegisterPage(page);
    accountPage = new AccountPage(page);

    await homePage.openHomepage(url);
    await homePage.homepageLoaded();
    await homePage.clickSignupLogin();

    await loginPage.verifyLoginToYourAccount();
    await loginPage.fillUserAccount(data.email, data.password);
    await loginPage.clickLoginButton();


    await accountPage.verifyLoggedInAsUsername(data.username);


    await homePage.clickLogoutButton();
    await loginPage.verifyNavigateToLoginPage();
})