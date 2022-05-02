const express = require('express');

// const AuthController = require('../../controller/auth.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { ROUTES, withId } = require('../../../helpers/constants/route.constants');
// const { validateAsync } = require('../../middlewares/validation/joi.validator');

const inventoryRouter = express.Router();

inventoryRouter
  .get(withId(ROUTES.ROOT, 'oId'), (req, res) => res.send(`${req.url} working!`));

inventoryRouter
  .get(withId(ROUTES.ROOT, 'bId'), (req, res) => res.send(`${req.url} working!`));

inventoryRouter
  .get(ROUTES.ROOT, (req, res) => res.send(`${req.url} working!`));

module.exports = inventoryRouter;
