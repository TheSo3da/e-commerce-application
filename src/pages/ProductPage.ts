import { Page } from "@playwright/test";

export class ProductPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async addToCart() {
    await this.page.getByTestId('add-to-cart').click()
  }

  async openCart() {
    await this.page.getByTestId('nav-cart').click()
  }
}
