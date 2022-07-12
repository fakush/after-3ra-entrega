import config from '../config'
import { faker } from '@faker-js/faker'
import logger from '../utils/logger'
import knex from 'knex'

const dbOptions = {
  client: 'sqlite3',
  connection: () => ({
    filename: `./db/${config.SQLITE_DB}`
  }),
  useNullAsDefault: true
}

const seedDB = (amount: number) => {
  const db = []
  for (let i = 0; i < amount; i++) {
    db.push({
      _id: faker.database.mongodbObjectId(),
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
  private db

  constructor() {
    this.db = knex(dbOptions)
  }

  init() {
    this.db.schema.hasTable('products').then(async (exists) => {
      if (!exists) {
        logger.warn('Insertando Products Data Mockup')
        await this.db.schema.createTable('products', async (table) => {
          table.increments()
          table.string('_id').notNullable()
          table.string('name').notNullable()
          table.string('description').notNullable()
          table.string('code').notNullable()
          table.string('img').notNullable()
          table.integer('price').notNullable()
          table.integer('stock').notNullable()
          table.timestamps(true, true)
        })

        // seedDB
        const seeds = seedDB(50)
        seeds.forEach(async (element: any) => {
          await this.db('products')
            .insert(element)
            .catch((err) => {
              throw new Error(err.message)
            })
        })
      }
    })
  }

  async getProducts() {
    logger.debug('Getting products from sqlite3');
    return this.db('products').select('*')
  }

  async getProductById(id?: string) {
    return this.db('products').where('_id', id)
  }

  async postProduct(data: any) {
    data.id = faker.database.mongodbObjectId()
    await this.db('products')
      .insert(data)
      .then(() => {
        return `Product added successfully`
      })
      .catch((err) => {
        logger.error('There was an error inserting the product')
        throw new Error(err.message)
      })
  }

  async updateProduct(id: string, data: any) {
    return await this.db('products').where('_id', id).update(data)
  }

  async deleteProduct(id: string) {
    this.db('products')
      .del()
      .where('_id', id)
      .then(() => {
        console.log(`Element deleted`)
      })
      .catch((err) => {
        logger.error('There was an error deleting the element')
        throw new Error(err.message)
      })
  }
}

const products = new Products()
export default products
