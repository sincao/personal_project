import { test, expect } from '@playwright/test';

test('Example test with Allure', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});