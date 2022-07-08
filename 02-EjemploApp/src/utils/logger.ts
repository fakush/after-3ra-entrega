import winston from 'winston'

const { createLogger, format, transports } = winston
const { combine, printf, timestamp, colorize, label } = format

const warnFilter = format((info) => {
  return info.level.includes('warn') ? info : false
})

const errorFilter = format((info) => {
  return info.level.includes('error') ? info : false
})

const myFormat = printf((info) => {
  return `[${info.label}] ${info.timestamp} | ${info.level}: ${info.message}`
})

const logConfiguration = {
  level: 'silly',
  format: combine(timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }), label({ label: 'ProyectoCoderhouse' })),
  transports: [
    new winston.transports.Console({ format: combine(colorize({ all: true }), myFormat) }),
    new winston.transports.File({
      filename: process.cwd() + '/logs/warn.log',
      level: 'warn',
      format: combine(warnFilter(), myFormat)
    }),
    new winston.transports.File({
      filename: process.cwd() + '/logs/error.log',
      level: 'error',
      format: combine(errorFilter(), myFormat)
    })
  ]
}

const logger = createLogger(logConfiguration)
export default logger
