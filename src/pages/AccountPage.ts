import { Locator, Page } from "@playwright/test";

export class AccountPage {
  readonly page: Page;
  readonly userMenu: Locator;
  constructor(page: Page) {
    this.page = page;
    this.userMenu = page.getByTestId('nav-menu')
  }
}
