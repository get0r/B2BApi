const express = require('express');

const TransactionController = require('../../controller/transaction.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { ROUTES, withId, TRANSACTION_ROUTES } = require('../../../helpers/constants/route.constants');
const { authUser } = require('../../middlewares/auth/auth.middleware');
// const { validateAsync } = require('../../middlewares/validation/joi.validator');

const transactionRouter = express.Router();

transactionRouter
  .get(ROUTES.ROOT, authUser, TransactionController.getMyTransactions);

transactionRouter
  .get(TRANSACTION_ROUTES.IN_HOUSE, (req, res) => res.send(`${req.url} working!`));

transactionRouter
  .get(TRANSACTION_ROUTES.IN_REQ, (req, res) => res.send(`${req.url} working!`));

module.exports = transactionRouter;
