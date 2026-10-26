import { Page } from "@playwright/test";
import { Credentials } from "../data";

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async login({ email, password }: Credentials) {
    await this.page.goto("/auth/login");
    await this.page.getByTestId('email').fill(email)
    await this.page.getByTestId('password').fill(password)
    await this.page.getByTestId('login-submit').click()
    await this.page.waitForURL('**/account')
  }
}
