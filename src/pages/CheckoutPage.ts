import { expect, Locator, Page } from "@playwright/test";
import { Address } from "../data";

export class CheckoutPage {
  readonly page: Page;
  readonly productTitles: Locator;
  readonly paymentSuccessMessage: Locator;
  readonly orderConfirmation: Locator;
  constructor(page: Page) {
    this.page = page;
    this.productTitles = page.getByTestId('product-title')
    this.paymentSuccessMessage = page.getByTestId('payment-success-message')
    this.orderConfirmation = page.locator('#order-confirmation')
  }

  async proceedFromCart() {
    await this.page.getByTestId('proceed-1').click()
  }

  async proceedFromSignIn() {
    // the address form is pre-filled from the user's profile; a late fill would wipe what we type
    await expect(this.page.getByTestId('street')).not.toHaveValue('')
    await this.page.getByTestId('proceed-2').click()
  }

  async proceedFromAddress() {
    await this.page.getByTestId('proceed-3').click()
  }

  async fillBillingAddress(address: Address) {
    const postcodeLookup = this.page.waitForResponse(response => {
      const url = new URL(response.url())
      return url.pathname.endsWith('/postcode-lookup') && url.searchParams.get('postcode') === address.postalCode
    })
    await this.page.getByTestId('country').selectOption(address.country)
    await this.page.getByTestId('postal_code').fill(address.postalCode)
    await this.page.getByTestId('house_number').fill(address.houseNumber)
    await postcodeLookup
    await expect(this.page.getByTestId('postcode-lookup-loading')).toBeHidden()
    // the lookup overwrites street, city and state, so fill them after it finishes
    await this.page.getByTestId('street').fill(address.street)
    await this.page.getByTestId('city').fill(address.city)
    await this.page.getByTestId('state').fill(address.state)
  }

  async payByCash() {
    await this.page.getByTestId('payment-method').selectOption('cash-on-delivery')
    await this.page.getByTestId('finish').click()
  }

  async confirmOrder() {
    await this.page.getByTestId('finish').click()
  }
}
