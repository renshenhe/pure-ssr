// @flow

import compression from 'compression';
import express from 'express';

import { isProd, STATIC_PATH, WEB_PORT } from '../shared/config';
import routing from './routing';

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

routing(app);

app.listen(WEB_PORT, () => {
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
    '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`);
})