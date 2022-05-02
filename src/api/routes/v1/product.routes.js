const express = require('express');

// const AuthController = require('../../controller/auth.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { ROUTES, PRODUCT_ROUTES, withId } = require('../../../helpers/constants/route.constants');
// const { validateAsync } = require('../../middlewares/validation/joi.validator');

const productRouter = express.Router();

productRouter
  .post(ROUTES.ROOT, (req, res) => res.send(`${req.url} working!`));

productRouter
  .put(withId(ROUTES.ROOT, 'pId'), (req, res) => res.send(`${req.url} working!`));

productRouter
  .get(withId(ROUTES.ROOT, 'pId'), (req, res) => res.send(`${req.url} working!`));

productRouter
  .post(`${withId(ROUTES.ROOT, 'pId')}/setAd`, (req, res) => res.send(`${req.url} working!`));

productRouter
  .delete(withId(ROUTES.ROOT, 'pId'), (req, res) => res.send(`${req.url} working!`));

productRouter
  .get(PRODUCT_ROUTES.REC_PRODUCTS, (req, res) => res.send(`${req.url} working!`));

productRouter
  .get(ROUTES.ROOT, (req, res) => res.send(`${req.url} working!`));

productRouter
  .get(PRODUCT_ROUTES.AD_PRODUCTS, (req, res) => res.send(`${req.url} working!`));

productRouter
  .post(withId(PRODUCT_ROUTES.RATE, 'pId'), (req, res) => res.send(`${req.url} working!`));

module.exports = productRouter;
