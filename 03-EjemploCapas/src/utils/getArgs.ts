import minimist from 'minimist';
import logger from './logger';

const args = minimist(process.argv.slice(2));

if (args.h)
  logger.verbose(
    'Argumentos validos: port=NUMBER - cluster=true/false - fbClientId=FACEBOOK_CLIENT_ID - fbClientSecret=FACEBOOK_CLIENT_SECRET'
  );

export const allArguments = args;
export const portArgument = args.port;
export const fbClientIdArgument = args.fbClientId;
export const fbClientSecretArgument = args.fbClientSecret;
export const ClusterArgument = args.cluster;
