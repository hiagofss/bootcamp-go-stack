import express from 'express';

import { helloWorld } from './routes';

const app = express();

app.get('/', (request, response) => {
  helloWorld;
});

app.listen(3333, () => {
  console.log('✔ Server is ready');
});
