const express = require('express');

// const AuthController = require('../../controller/auth.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { ROUTES, withId, TRANSACTION_ROUTES } = require('../../../helpers/constants/route.constants');
// const { validateAsync } = require('../../middlewares/validation/joi.validator');

const transactionRouter = express.Router();

transactionRouter
  .get(withId(ROUTES.ROOT, 'bId'), (req, res) => res.send(`${req.url} working!`));

transactionRouter
  .get(ROUTES.ROOT, (req, res) => res.send(`${req.url} working!`));

transactionRouter
  .get(TRANSACTION_ROUTES.IN_HOUSE, (req, res) => res.send(`${req.url} working!`));

transactionRouter
  .get(TRANSACTION_ROUTES.IN_REQ, (req, res) => res.send(`${req.url} working!`));

module.exports = transactionRouter;
