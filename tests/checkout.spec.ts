import { billingAddress, userCustomer } from "../src/data";
import { test, expect } from "../src/fixtures";

const product = "Combination Pliers";

test("user can log in and complete a purchase", async ({
  loginPage,
  homePage,
  productPage,
  checkoutPage,
}) => {
  await loginPage.login(userCustomer);
  await homePage.goto();
  await homePage.openProduct(product);
  await productPage.addToCart();
  await productPage.openCart();
  await checkoutPage.proceedFromCart();
  await checkoutPage.proceedFromSignIn();
  await checkoutPage.fillBillingAddress(billingAddress);
  await checkoutPage.proceedFromAddress();
  await checkoutPage.payByCash();
  await expect(checkoutPage.paymentSuccessMessage).toHaveText(
    "Payment was successful",
  );
  await checkoutPage.confirmOrder();
  await expect(checkoutPage.orderConfirmation).toHaveText(
    /Thanks for your order! Your invoice number is INV-\d+/,
  );
});
