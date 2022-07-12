import Config from './config'
import { portArgument, ClusterArgument } from './utils/getArgs'
import logger from './utils/logger'
import myServer from './services/server'
import os from 'os'
import cluster from 'cluster'
import portFinder from 'portfinder'

const portParam = portArgument || Config.PORT
const clusterArgument = ClusterArgument || false
const numCPUs = os.cpus().length
logger.info(`CLUSTER ==> ${clusterArgument}`)

if (cluster.isMaster && clusterArgument) {
  logger.info(`NUMERO DE CPUS ===> ${numCPUs}`)
  logger.info(`PID MASTER ${process.pid}`)
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }
  cluster.on('exit', (worker: any) => {
    logger.error(`Worker ${worker.process.pid} died at ${Date()}`)
    cluster.fork()
  })
} else {
  portFinder.getPort(
    {
      port: Number(portParam), // minimum port
      stopPort: Number(portParam) + 50 // maximum port
    },
    function (err, result) {
      if (err) {
        logger.error(err.message)
      }
      myServer.listen(result, () =>
        logger.info(`Servidor express escuchando en el puerto ${result} - PID WORKER ${process.pid}`)
      )
    }
  )
}

// Imprimo en Consola el código de salida
process.on('exit', (code) => {
  logger.error(`Exit ==> El proceso termino con codigo ${code}\n\n`)
})
