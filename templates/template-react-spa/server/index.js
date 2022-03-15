import { createServer, ActiveModelSerializer } from 'miragejs';

import Common from '../src/utils/common';

import exampleFactory from './factories/exampleFactory';

import exampleModel from './models/exampleModel';

import exampleRoutes from './routes/exampleRoutes';

import exampleSeed from './seeds/exampleSeed';

const startServer = ({ environment = 'development' } = {}) => {
  console.log('Starting MirageJS server.');

  const server = createServer({
    environment,
    urlPrefix: process.env.API_HOST,
    serializers: {
      application: ActiveModelSerializer.extend({
        keyForAttribute(key) {
          return Common.camelCase(key);
        },
        keyForRelationship(key) {
          return Common.camelCase(key);
        },
        keyForModel(key) {
          return Common.camelCase(key);
        },
      }),
    },
    models: {
      ...exampleModel,
    },
    factories: {
      ...exampleFactory,
    },
    seeds(context) {
      exampleSeed(context);
    },
    routes() {
      exampleRoutes(this);
    },
  });

  server.logging = true;
  return server;
};

export default startServer;
