const express = require('express');
const routes = require('../routes');

module.exports = app => {
  const router = express.Router()
  app.use('/api/v1', router);
  routes(router)
};

