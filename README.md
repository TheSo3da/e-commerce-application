# Practice Software Testing – Playwright tests

UI and API tests for [practicesoftwaretesting.com](https://practicesoftwaretesting.com), written with Playwright and TypeScript.

## What's tested

- **UI checkout** (`tests/checkout.spec.ts`): a customer logs in, adds "Combination Pliers" to the cart, enters a billing address, pays cash on delivery and gets an invoice number.
- **API** (`tests/api.spec.ts`): a customer logs in for a token, and the products endpoint returns a list of products with names and prices.
- **API + UI** (`tests/api-ui.spec.ts`): a new user is registered through the API, then logs in through the UI and sees their name in the account menu.

## Project layout

- `src/pages/` – page objects for the pages the tests use
- `src/api/ApiClient.ts` – the API calls the tests make
- `src/fixtures.ts` – fixtures that give each test its page objects and API client
- `src/data.ts` – the test customer, the billing address and a builder for new users

## Run the tests

Requires Node.js 20 or newer.

```bash
npm ci
npx playwright install --with-deps chromium
npx playwright test
```

GitHub Actions also runs the tests on every push and pull request to `main` (`.github/workflows/playwright.yml`).
