import mongoose from 'mongoose'
import logger from '../utils/logger'
import { faker } from '@faker-js/faker'
import mongoDB from '../utils/mongoConnection'

const dbCollection = 'products'
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: 'Unknown item' },
  code: { type: String, required: true },
  img: {
    type: String,
    default: 'https://icons.iconarchive.com/icons/mattahan/ultrabuuf/512/Comics-Mask-icon.png'
  },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 }
})

const seedDB = (amount: number) => {
  const db = []
  for (let i = 0; i < amount; i++) {
    db.push({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      code: faker.random.alphaNumeric(5),
      img: faker.image.technics(),
      price: faker.random.numeric(5),
      stock: faker.random.numeric(3)
    })
  }
  return db
}

class Products {
  private products

  constructor() {
    mongoDB.getConnection()
    this.products = mongoose.model(dbCollection, productSchema)
    this.products.count().then((count) => {
      if (count < 1) {
        logger.warn('Insertando Products Data Mockup')
        this.products.insertMany(seedDB(50))
      }
    })
  }

  async getProducts() {
    try {
      const response = await this.products.find()
      return response
    } catch (error: any) {
      logger.error(error.message)
      throw new Error(`Error getting products: ${error.message}`)
    }
  }

  async getProductById(id: string) {
    try {
      const response = await this.products.findById(id)
      return response
    } catch (error: any) {
      logger.error(error.message)
      throw new Error(`Error getting product: ${error.message}`)
    }
  }

  async postProduct(product: any) {
    try {
      const response = await this.products.create(product)
      return response
    } catch (error: any) {
      logger.error(error.message)
      throw new Error(`Error creating product: ${error.message}`)
    }
  }

  async updateProduct(id: string, product: any) {
    try {
      const response = await this.products.findByIdAndUpdate(id, product)
      return response
    } catch (error: any) {
      logger.error(error.message)
      throw new Error(`Error getting product: ${error.message}`)
    }
  }

  async deleteProduct(id: string) {
    try {
      const response = await this.products.findByIdAndDelete(id)
      return response
    } catch (error: any) {
      logger.error(error.message)
      throw new Error(`Error deleting product: ${error.message}`)
    }
  }
}

const products = new Products()
export default products
