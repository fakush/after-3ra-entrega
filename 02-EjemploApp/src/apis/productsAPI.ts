import productsMongo from '../models/products_mongo'
import productsSQLite from '../models/products_sqlite'
import config from '../config'
import logger from '../utils/logger'

const dbType: string = config.DB_ENV
logger.info('database type: ' + dbType)

class MongoProductsAPI {
  async getProducts() {
    return await productsMongo.getProducts()
  }

  async getProductById(id: string) {
    return await productsMongo.getProductById(id)
  }

  async postProduct(product: any) {
    return await productsMongo.postProduct(product)
  }

  async updateProduct(id: string, product: any) {
    return await productsMongo.updateProduct(id, product)
  }

  async deleteProduct(id: string) {
    return await productsMongo.deleteProduct(id)
  }
}

class SqlProductsAPI {
  constructor(){
    productsSQLite.init()
  }

  async getProducts() {
    return await productsSQLite.getProducts()
  }

  async getProductById(id: string) {
    return await productsSQLite.getProductById(id)
  }

  async postProduct(product: any) {
    return await productsSQLite.postProduct(product)
  }

  async updateProduct(id: string, product: any) {
    return await productsSQLite.updateProduct(id, product)
  }

  async deleteProduct(id: string) {
    return await productsSQLite.deleteProduct(id)
  }
}

const productsAPI = dbType === 'sqlite' ? new SqlProductsAPI() : new MongoProductsAPI()
export default productsAPI
