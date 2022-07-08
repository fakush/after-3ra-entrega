import dotenv from 'dotenv';

dotenv.config();

const venv = {
  PORT: process.env.PORT || 8080,
  MONGO_ATLAS_USER: process.env.MONGO_ATLAS_USER || 'user',
  MONGO_ATLAS_PASSWORD: process.env.MONGO_ATLAS_PASSWORD || 'pwd',
  MONGO_ATLAS_CLUSTER: process.env.MONGO_ATLAS_CLUSTER || 'clusterUrl',
  MONGO_ATLAS_DBNAME: process.env.MONGO_ATLAS_DBNAME || 'dbName',
  MONGO_LOCAL_DBNAME: process.env.MONGO_LOCAL_DBNAME || 'dbNameLocal',

  ETHEREAL_USERNAME: process.env.ETHEREAL_USERNAME || 'userName',
  ETHEREAL_EMAIL: process.env.ETHEREAL_EMAIL || 'email',
  ETHEREAL_PASSWORD: process.env.ETHEREAL_PASSWORD || 'password',

  GMAIL_USERNAME: process.env.GMAIL_USERNAME || 'userName',
  GMAIL_EMAIL: process.env.GMAIL_EMAIL || 'email',
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD || 'password',

  TWILIO_ACCOUNT_ID: process.env.TWILIO_ACCOUNT_ID || 'id',
  TWILIO_TOKEN: process.env.TWILIO_TOKEN || 'token',
  TWILIO_CELLPHONE: process.env.TWILIO_CELLPHONE || 'phoneNumber',

  ADMIN_WHASTAPP_NUMBER: process.env.ADMIN_WHASTAPP_NUMBER || 'phoneNumber',
  TWILIO_WHASTAPP_NUMBER: process.env.TWILIO_WHASTAPP_NUMBER || 'phoneNumber'
};

export default venv;
