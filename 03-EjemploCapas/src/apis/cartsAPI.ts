import Carts from '../models/carts'

class CartsAPI {
  async getCart(id: string) {
    return await Carts.getCart(id)
  }

  async createCart(id: string) {
    return await Carts.createCart(id)
  }

  async updateCart(id: string, cart: any) {
    return await Carts.updateCart(id, cart)
  }

  async emptyCart(id: string) {
    return await Carts.emptyCart(id)
  }
}

const cartsAPI = new CartsAPI()
export default cartsAPI
