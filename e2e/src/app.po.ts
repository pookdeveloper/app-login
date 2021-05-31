import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async navigateToPage(page: string): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/${page}`);
  }

  async getButtonSubmitForm(): Promise<ElementFinder> {
    return element(by.css('.login-form-button'));
  }

  async getErrorEmail(): Promise<ElementFinder> {
    return element(by.css('#emailInput .ng-trigger-helpMotion'));
  }

  async getErrorPassword(): Promise<ElementFinder> {
    return element(by.css('#passwordInput .ng-trigger-helpMotion'));
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }


}
