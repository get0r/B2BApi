const express = require('express');

const ProductController = require('../../controller/product.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { ROUTES, PRODUCT_ROUTES, withId } = require('../../../helpers/constants/route.constants');
const { authUser } = require('../../middlewares/auth/auth.middleware');
// const { validateAsync } = require('../../middlewares/validation/joi.validator');

const productRouter = express.Router();

productRouter
  .post(ROUTES.ROOT, authUser, ProductController.createProduct);

productRouter
  .put(withId(ROUTES.ROOT, 'pId'), authUser, ProductController.updateProduct);

productRouter
  .get(withId(ROUTES.ROOT, 'pId'), ProductController.getProducts);

productRouter
  .post(`${withId(ROUTES.ROOT, 'pId')}/setAd`, authUser, ProductController.setProductAd);

productRouter
  .delete(withId(ROUTES.ROOT, 'pId'), authUser, ProductController.removeProduct);

productRouter
  .get(PRODUCT_ROUTES.REC_PRODUCTS, authUser, ProductController.getRecommendedProducts);

productRouter
  .get(ROUTES.ROOT, ProductController.getProducts);

productRouter
  .get(PRODUCT_ROUTES.AD_PRODUCTS, ProductController.getAdProducts);

productRouter
  .post(withId(PRODUCT_ROUTES.RATE, 'pId'), ProductController.rateProduct);

module.exports = productRouter;
