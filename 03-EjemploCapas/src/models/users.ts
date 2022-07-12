import mongoose from 'mongoose'
import logger from '../utils/logger'
import { faker } from '@faker-js/faker'
import MongoDB from '../utils/mongoConnection'
import bcrypt from 'bcrypt'

export interface UserObject {
  _id?: string
  firstName: string
  lastName: string
  email: string
  age: number
  isAdmin: boolean
  password: string
}

const dbCollection = 'users'
const usersSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  isAdmin: { type: Boolean, default: false },
  password: { type: String, required: true }
})

const seedDB = (amount: number) => {
  const db = []
  for (let i = 0; i < amount; i++) {
    db.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      age: faker.random.numeric(2),
      isAdmin: faker.datatype.boolean(),
      password: 'password'
    })
  }
  return db
}

usersSchema.pre('save', async function (next) {
  const user = this
  const hash = await bcrypt.hash(user.password, 10)

  this.password = hash
  next()
})

usersSchema.methods.isValidPassword = async function (password: string) {
  const user = this
  const compare = await bcrypt.compare(password, user.password)
  return compare
}

class Users {
  private users

  constructor() {
    MongoDB.getConnection()
    this.users = mongoose.model(dbCollection, usersSchema)
    this.users.count().then((count) => {
      if (count < 1) {
        logger.warn('Insertando Users Data Mockup')
        seedDB(50).map(async user => {
          const newUser = new this.users(user)
          newUser.save()
        })
      }
    })
  }

  async getUsers() {
    try {
      const response = await this.users.find()
      return response
    } catch (error: any) {
      logger.error(error.message)
      throw new Error(`Error getting users: ${error.message}`)
    }
  }

  async getUserById(id: string) {
    try {
      const response = await this.users.findById(id)
      return response
    } catch (error: any) {
      logger.error(error.message)
      throw new Error(`Error getting product: ${error.message}`)
    }
  }

  async getUserByEmail(email: string) {
    try {
      const response = await this.users.findOne({ email })
      return response
    } catch (error: any) {
      logger.error(error.message)
      throw new Error(`Error getting user: ${error.message}`)
    }
  }

  async postUser(user: UserObject) {
    try {
      const newUser = new this.users(user)
      await newUser.save()
      return newUser
    } catch (error: any) {
      logger.error(error.message)
      throw new Error(`Error creating product: ${error.message}`)
    }
  }

  async updateUser(user: UserObject) {
    try {
      const response = await this.users.findByIdAndUpdate(user._id, user)
      return response
    } catch (error: any) {
      logger.error(error.message)
      throw new Error(`Error getting product: ${error.message}`)
    }
  }

  async validateUserPassword(user: UserObject, password: string): Promise<boolean> {
    const response = await this.users.findOne({ email: user.email })
    if (!response) return false
    const compare = await bcrypt.compare(password, response.password)
    if (!compare) return false
    return true
  }
}

const users = new Users()
export default users
