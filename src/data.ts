export const userCustomer = {
    email: 'customer@practicesoftwaretesting.com',
    password: 'welcome01'
}

export type Credentials = typeof userCustomer

export const billingAddress = {
    country: 'US',
    postalCode: '10001',
    houseNumber: '1',
    street: 'Main Street',
    city: 'New York',
    state: 'New York'
}

export type Address = typeof billingAddress

export function buildNewUser() {
    const id = Math.floor(10000000 + Math.random() * 90000000)
    return {
        first_name: 'Test',
        last_name: `User${id}`,
        dob: '1990-05-15',
        phone: '0612345678',
        email: `qa.${id}@example.com`,
        password: `Qa!${id}Pw9`,
        address: {
            street: 'Main Street 1',
            city: 'New York',
            state: 'New York',
            country: 'US'
        }
    }
}

export type NewUser = ReturnType<typeof buildNewUser>