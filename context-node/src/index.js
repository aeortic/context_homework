// ./src/index.js

import express from 'express'
import ash from 'express-async-handler'

import Clients from './clients.json' assert {type: 'json'}
// import { readFile } from 'fs';

export const app = express();

app.use(express.json());

/**
 * @openapi
 * /healthcheck:
 *   get:
 *     description: Sanity check for node
 *     responses:
 *       200:
 *         description: Returns OK
 */
app.get('/healthcheck', ash(async(req, res) => {
  const status = {"status":"OK"};
  res.send(status);
}));


app.get('/client_list', ash(async(req, res) => {

  res.send(Clients)
  // typically, such things would come from a database in a real implementation. 
  // readFile('./clients.json', (err, source) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     const json = JSON.parse(source)
  //     res.send(json)
  //   }
  // });
}))