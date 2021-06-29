const express = require('express');
const routes = require('../routes');

module.exports = app => {
  const router = express.Router()
  app.use('/', router);
  routes(router)
};

