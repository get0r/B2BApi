const express = require('express');

const OrderController = require('../../controller/order.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { ORDER_ROUTES, ROUTES, withId } = require('../../../helpers/constants/route.constants');
const { authUser } = require('../../middlewares/auth/auth.middleware');
// const { validateAsync } = require('../../middlewares/validation/joi.validator');

const orderRouter = express.Router();

orderRouter
  .post(ROUTES.ROOT, authUser, OrderController.create);

orderRouter
  .get(ROUTES.ROOT, authUser, OrderController.getMyOrders);

orderRouter
  .put(withId(ROUTES.ROOT, 'oId'), (req, res) => res.send(`${req.url} working!`));

orderRouter
  .get(withId(ROUTES.ROOT, 'oId'), (req, res) => res.send(`${req.url} working!`));

orderRouter
  .get(`${withId(ROUTES.ROOT, 'cId')}/setAd`, (req, res) => res.send(`${req.url} working!`));

orderRouter
  .get(withId(ORDER_ROUTES.RETURN_REQ, 'cId'), (req, res) => res.send(`${req.url} working!`));

module.exports = orderRouter;
