// ./src/index.js

import express from 'express'
import ash from 'express-async-handler'
import cors from 'cors'

import { readFile } from 'node:fs';

export const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(cors())

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

  // typically, such things would come from a database in a real implementation. 
  readFile('./clients.json', (err, source) => {
    if (err) {
      console.log(err);
    } else {
      const json = JSON.parse(source)
      res.send(json)
    }
  });
}))
