import { Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/");
  }

  async openProduct(name: string) {
    await this.page.getByTestId('search-query').fill(name)
    await this.page.getByTestId('search-submit').click()
    await this.page.getByTestId('search_completed').waitFor()
    await this.page.getByTestId('product-name').filter({ hasText: name }).first().click()
  }
}
