import { test, expect } from "../src/fixtures"
import { buildNewUser } from "../src/data"

test('user created through the API can log in through the UI', async ({ api, loginPage, accountPage }) => {
  const newUser = buildNewUser()
  const registerResponse = await api.registerUser(newUser)
  expect(registerResponse.status()).toBe(201)

  await loginPage.login(newUser)
  await expect(accountPage.userMenu).toContainText(`${newUser.first_name} ${newUser.last_name}`)
})
