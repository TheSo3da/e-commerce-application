import { test as base } from "@playwright/test"
import { LoginPage } from "./pages/LoginPage"
import { HomePage } from "./pages/HomePage"
import { ProductPage } from "./pages/ProductPage"
import { CheckoutPage } from "./pages/CheckoutPage"
import { AccountPage } from "./pages/AccountPage"
import { ApiClient } from "./api/ApiClient"

type Fixtures = {
    api: ApiClient;
    loginPage : LoginPage;
    homePage: HomePage;
    productPage: ProductPage;
    checkoutPage: CheckoutPage;
    accountPage: AccountPage;
}

export const test = base.extend<Fixtures>({
    api: async ({ playwright }, use) => {
        const request = await playwright.request.newContext({
            baseURL: 'https://api.practicesoftwaretesting.com',
            extraHTTPHeaders: { Accept: 'application/json' }
        })
        await use(new ApiClient(request))
        await request.dispose()
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page))
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page))
    },
    accountPage: async ({ page }, use) => {
        await use(new AccountPage(page))
    }
})

export { expect } from "@playwright/test"
