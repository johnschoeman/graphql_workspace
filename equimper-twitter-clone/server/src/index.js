/* eslint-disable no-console */

import express from 'express';
import { createServer } from 'http';

import './config/db';
import constants from './config/constants';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import mocks from './mocks';
import middlewares from './config/middlewares';

const app = express();

middlewares(app);

const graphQLServer = createServer(app);

mocks().then(() => {
  graphQLServer.listen(constants.PORT, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`App listen to port: ${constants.PORT}`);
    }
  });
});
