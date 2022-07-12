import mongoose from 'mongoose';
import config from '../config';
import logger from './logger'

mongoose.Promise = global.Promise
export const connectionURL = `mongodb+srv://${config.MONGO_ATLAS_USER}:${config.MONGO_ATLAS_PASSWORD}@${config.MONGO_ATLAS_CLUSTER}/${config.MONGO_ATLAS_DBNAME}?retryWrites=true&w=majority`

class mongoConnect {
  mongoURL: string;
  connection: any;
  
  constructor() {
    this.mongoURL = connectionURL
    this.connection = ''
  }

  async getConnection() {
    if (this.connection) {
      return this.connection
    } else {
      logger.debug('Establishing connection')
      try {
        this.connection = mongoose.Connection
        await mongoose.connect(this.mongoURL)
        logger.debug('Connection established')
        return this.connection
      } catch (error) {
        logger.error('Connection error: ', error)
        logger.error(error)
      }
      return this.connection
    }
  }
  closeConnection() {
    mongoose.disconnect()
  }
}

const MongoDB = new mongoConnect()
export default MongoDB