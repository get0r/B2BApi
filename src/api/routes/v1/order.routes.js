const express = require('express');

// const AuthController = require('../../controller/auth.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { ORDER_ROUTES, ROUTES, withId } = require('../../../helpers/constants/route.constants');
// const { validateAsync } = require('../../middlewares/validation/joi.validator');

const orderRouter = express.Router();

orderRouter
  .post(ROUTES.ROOT, (req, res) => res.send(`${req.url} working!`));

orderRouter
  .put(withId(ROUTES.ROOT, 'oId'), (req, res) => res.send(`${req.url} working!`));

orderRouter
  .get(withId(ROUTES.ROOT, 'oId'), (req, res) => res.send(`${req.url} working!`));

orderRouter
  .get(`${withId(ROUTES.ROOT, 'cId')}/setAd`, (req, res) => res.send(`${req.url} working!`));

orderRouter
  .get(withId(ORDER_ROUTES.RETURN_REQ, 'cId'), (req, res) => res.send(`${req.url} working!`));

module.exports = orderRouter;
