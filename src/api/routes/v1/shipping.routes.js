const express = require('express');

// const AuthController = require('../../controller/auth.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { ROUTES, withId } = require('../../../helpers/constants/route.constants');
// const { validateAsync } = require('../../middlewares/validation/joi.validator');

const shippingRouter = express.Router();

shippingRouter
  .put(withId(ROUTES.ROOT, 'shipId'), (req, res) => res.send(`${req.url} working!`));

shippingRouter
  .get(withId(ROUTES.ROOT, 'shipId'), (req, res) => res.send(`${req.url} working!`));

shippingRouter
  .get(withId(ROUTES.ROOT, 'oId'), (req, res) => res.send(`${req.url} working!`));

module.exports = shippingRouter;
