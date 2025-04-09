import { expect, Page } from '@playwright/test';

export default class BasePage{
    constructor(protected page: Page){}

    async navigateTo(url: string) {
        await this.page.goto(url);
      }

    protected async click(locator: string){
        return this.page.locator(locator).click({timeout:3000})
    }

    protected async input(locator: string, text: string){
        return this.page.locator(locator).fill(text);
    }

    protected async expectedToHaveText(locator: string, text: string){
        await Promise.all([
			expect(this.page.locator(locator)).toHaveText(text, { timeout: 3000 }),
		]);
    }

    protected async expectToBeVisible(locator: string) {
		await Promise.all([expect(this.page.locator(locator)).toBeVisible()]);
	}

    protected async selectOptionByValue(locator: string, value: string): Promise<void> {
        await this.page.selectOption(locator, { value });
    }

    protected async selectOptionByLabel(locator: string, label: string): Promise<void> {
        await this.page.selectOption(locator, { label });
    }
    
    protected  async selectOptionByIndex(locator: string, index: number): Promise<void> {
        await this.page.selectOption(locator, { index });
    }

    protected async checkOnCheckbox(locator:string){
        await this.page.check(locator)
    }

      

    

    
    
    

    
}