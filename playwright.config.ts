import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://practicesoftwaretesting.com',
    testIdAttribute: 'data-test',
  },
});
