const express = require('express');
require('dotenv').config();
// if running on vercel, use generated .prod configs
const env = process.env.VERCEL ? '.prod' : '.dev';
const suffix = env + '.json';

const host = require('../data/host' + suffix);
const booking = require('../data/booking' + suffix);
const shopping = require('../data/shopping' + suffix);
const dashboard = require('../data/dashboard' + suffix);
const customer = require('../data/customer' + suffix);
const living = require('../data/living' + suffix);

const app = express();
const port = process.env.PORT ?? 3000;

app.get('/host', (req, res) => {
  const platform = req.query.platform;
  const appVersion = req.query.appVersion;

  res.send(host[platform][appVersion]);
});

app.get('/booking', (req, res) => {
  const platform = req.query.platform;
  const appVersion = req.query.appVersion;

  res.send(booking[platform][appVersion]);
});

app.get('/shopping', (req, res) => {
  const platform = req.query.platform;
  const appVersion = req.query.appVersion;

  res.send(shopping[platform][appVersion]);
});

app.get('/dashboard', (req, res) => {
  const platform = req.query.platform;
  const appVersion = req.query.appVersion;

  res.send(dashboard[platform][appVersion]);
});

app.get('/customer', (req, res) => {
  const platform = req.query.platform;
  const appVersion = req.query.appVersion;

  res.send(customer[platform][appVersion]);
});

app.get('/living', (req, res) => {
  const platform = req.query.platform;
  const appVersion = req.query.appVersion;

  res.send(living[platform][appVersion]);
});

app.listen(port, () => {
  console.log(`[CatalogServer] Server listening at port ${port} `);
});

module.exports = app;
