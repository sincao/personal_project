import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import TestcasePage from '../pages/TestcasePage';

let url: string
let homePage: HomePage
let testcasePage: TestcasePage

test('test navigate to testcase page', async({page, baseURL}) => {
    url = `${baseURL}`;
    homePage = new HomePage(page);
    testcasePage = new TestcasePage(page);

    await homePage.openHomepage(url);
    await homePage.homepageLoaded();
    await homePage.clickTestcaseButton();
    await testcasePage.verifyNavigateToTestcasePage();
})