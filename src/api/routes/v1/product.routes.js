const express = require('express');

const ProductController = require('../../controller/product.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const {
  ROUTES, PRODUCT_ROUTES, withId, BUSINESS_ROUTES,
} = require('../../../helpers/constants/route.constants');
const { authUser } = require('../../middlewares/auth/auth.middleware');
const { upload } = require('../../../helpers/file/mutler.storage');
// const { validateAsync } = require('../../middlewares/validation/joi.validator');

const productRouter = express.Router();

productRouter
  .post(ROUTES.ROOT, [authUser, upload.fields([{ name: 'productImages1', maxCount: 1 }, { name: 'productImages2', maxCount: 1 }])], ProductController.createProduct);

productRouter
  .get(PRODUCT_ROUTES.REC_PRODUCTS, authUser, ProductController.getRecommendedProducts);

productRouter
  .put(withId(ROUTES.ROOT, 'pId'), authUser, ProductController.updateProduct);

productRouter
  .get(withId(ROUTES.ROOT, 'pId'), ProductController.getProducts);

productRouter
  .get(withId(BUSINESS_ROUTES.BUSINESS, 'bId'), authUser, ProductController.getProducts);

productRouter
  .post(`${withId(ROUTES.ROOT, 'pId')}/setAd`, authUser, ProductController.setProductAd);

productRouter
  .delete(withId(ROUTES.ROOT, 'pId'), authUser, ProductController.removeProduct);

productRouter
  .get(ROUTES.ROOT, ProductController.getProducts);

productRouter
  .get(PRODUCT_ROUTES.AD_PRODUCTS, ProductController.getAdProducts);

productRouter
  .post(withId(PRODUCT_ROUTES.RATE, 'pId'), ProductController.rateProduct);

module.exports = productRouter;
