const express = require('express');

// const AuthController = require('../../controller/auth.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { ORDER_ROUTES, withId } = require('../../../helpers/constants/route.constants');
// const { validateAsync } = require('../../middlewares/validation/joi.validator');

const orderRouter = express.Router();

orderRouter
  .post(ORDER_ROUTES.ORDERS, (req, res) => res.send(`${req.url} working!`));

orderRouter
  .put(withId(ORDER_ROUTES.ORDERS, 'oId'), (req, res) => res.send(`${req.url} working!`));

orderRouter
  .get(withId(ORDER_ROUTES.ORDERS, 'oId'), (req, res) => res.send(`${req.url} working!`));

orderRouter
  .get(`${withId(ORDER_ROUTES.ORDERS, 'cId')}/setAd`, (req, res) => res.send(`${req.url} working!`));

orderRouter
  .get(withId(ORDER_ROUTES.RETURN_REQ, 'cId'), (req, res) => res.send(`${req.url} working!`));

module.exports = orderRouter;
