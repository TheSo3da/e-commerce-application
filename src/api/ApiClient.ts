import { APIRequestContext } from "@playwright/test";
import { Credentials, NewUser } from "../data";

export class ApiClient {
  readonly request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async login(credentials: Credentials) {
    return this.request.post('/users/login', { data: credentials })
  }

  async getProducts() {
    return this.request.get('/products')
  }

  async registerUser(user: NewUser) {
    return this.request.post('/users/register', { data: user })
  }
}
