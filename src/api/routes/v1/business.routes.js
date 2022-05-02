const express = require('express');

// const AuthController = require('../../controller/auth.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { BUSINESS_ROUTES, withId } = require('../../../helpers/constants/route.constants');
// const { validateAsync } = require('../../middlewares/validation/joi.validator');

const businessRouter = express.Router();

businessRouter
  .put(withId(BUSINESS_ROUTES.BUSINESS, 'pId'), (req, res) => res.send(`${req.url} working!`));

businessRouter
  .put(withId(BUSINESS_ROUTES.BUSINESS_APPROVE, 'pId'), (req, res) => res.send(`${req.url} working!`));

businessRouter
  .get(BUSINESS_ROUTES.BUSINESS, (req, res) => res.send(`${req.url} working!`));

module.exports = businessRouter;
