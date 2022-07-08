import mongoose from 'mongoose'
import Logger from '../utils/logger'
import users from './users'
import MongoDB from '../utils/mongoConnection'

const dbCollection = 'carts'
const productSchema = new mongoose.Schema({
  user: { type: String, required: true },
  carts: { type: Array, required: false }
})

class Carts {
  private carts

  constructor() {
    MongoDB.getConnection()
    this.carts = mongoose.model(dbCollection, productSchema)
    this.carts.count().then(async (count) => {
      if (count < 1) {
        Logger.warn('creando carritos')
        await users.getUsers().then((list) => {
          list.forEach((user) => {
            this.carts.create({ user: user._id, carts: [] })
          })
        })
      }
    })
  }

  async getCart(id: string) {
    try {
      const response = await this.carts.find({ user: id })
      return response
    } catch (error: any) {
      Logger.error(error.message)
      throw new Error(`Error getting carts: ${error.message}`)
    }
  }

  async createCart(id: string) {
    try {
      const response = await this.carts.create({ user: id, carts: [] })
      return response
    } catch (error: any) {
      Logger.error(error.message)
      throw new Error(`Error creating cart: ${error.message}`)
    }
  }

  async updateCart(id: string, cart: any) {
    try {
      const cart: any = await this.carts.find({ user: id })
      const response = await this.carts.findByIdAndUpdate(cart._id, cart)
      return response
    } catch (error: any) {
      Logger.error(error.message)
      throw new Error(`Error updating cart: ${error.message}`)
    }
  }

  async emptyCart(cart: any) {
    try {
      const response = await this.carts.findByIdAndUpdate(cart._id, cart)
      return response
    } catch (error: any) {
      Logger.error(error.message)
      throw new Error(`Error deleting product: ${error.message}`)
    }
  }
}

const carts = new Carts()
export default carts
