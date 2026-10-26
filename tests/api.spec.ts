import { test, expect } from "../src/fixtures"
import { userCustomer } from "../src/data"

test('regular Customer can log in for a token and get the products list', async ({ api }) => {
  const loginResponse = await api.login(userCustomer)
  expect(loginResponse.status()).toBe(200)
  const { access_token } = await loginResponse.json()
  expect(access_token).toBeTruthy()

  const productsResponse = await api.getProducts()
  expect(productsResponse.status()).toBe(200)
  const products = await productsResponse.json()
  expect(products.data.length).toBeGreaterThan(0)
  expect(products.data[0]).toMatchObject({
    name: expect.any(String),
    price: expect.any(Number)
  })
})
