const routes = require('express').Router();
const DevController = require('./app/Controllers/DevController');

routes.get('/', (req, res) => {
  res.json({ ola: true });
});
routes.post('/devs', DevController.store);

module.exports = routes;
