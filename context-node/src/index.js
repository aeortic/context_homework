// ./src/index.js

import express from 'express'
import ash from 'express-async-handler'

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