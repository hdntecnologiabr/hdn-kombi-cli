/* eslint-disable @typescript-eslint/no-var-requires */
import { registerApplication, start } from 'single-spa';

import * as mfe from './index';

const startServer = require('../server');

registerApplication(
  'customer-portal-<%=mfeName%>',
  () => Promise.resolve(mfe),
  () => true,
  {
    domElement: document.getElementById('root'),
  }
);

startServer({ environment: 'development' }).logging = true;

start();
