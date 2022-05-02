const express = require('express');

// const AuthController = require('../../controller/auth.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { PRODUCT_ROUTES, withId } = require('../../../helpers/constants/route.constants');
// const { validateAsync } = require('../../middlewares/validation/joi.validator');
// const { registerSchema, loginSchema } = require('../../../database/validationSchemas/auth.joi.schema');

const productRouter = express.Router();

productRouter
  .post(PRODUCT_ROUTES.PRODUCTS, (req, res) => res.send(`${req.url} working!`));

productRouter
  .put(withId(PRODUCT_ROUTES.PRODUCTS, 'pId'), (req, res) => res.send(`${req.url} working!`));

productRouter
  .get(withId(PRODUCT_ROUTES.PRODUCTS, 'pId'), (req, res) => res.send(`${req.url} working!`));

productRouter
  .post(`${withId(PRODUCT_ROUTES.PRODUCTS, 'pId')}/setAd`, (req, res) => res.send(`${req.url} working!`));

productRouter
  .delete(withId(PRODUCT_ROUTES.PRODUCTS, 'pId'), (req, res) => res.send(`${req.url} working!`));

productRouter
  .get(PRODUCT_ROUTES.REC_PRODUCTS, (req, res) => res.send(`${req.url} working!`));

productRouter
  .get(PRODUCT_ROUTES.PRODUCTS, (req, res) => res.send(`${req.url} working!`));

productRouter
  .get(PRODUCT_ROUTES.AD_PRODUCTS, (req, res) => res.send(`${req.url} working!`));

productRouter
  .post(withId(PRODUCT_ROUTES.RATE, 'pId'), (req, res) => res.send(`${req.url} working!`));

module.exports = productRouter;
