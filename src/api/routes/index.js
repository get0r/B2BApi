const express = require('express');

const authRouter = require('./v1/auth.routes');
const categoryRouter = require('./v1/category.routes');
const productRouter = require('./v1/product.routes');
const businessRouter = require('./v1/business.routes');
const orderRouter = require('./v1/order.routes');
const shippingRouter = require('./v1/shipping.routes');
const transactionRouter = require('./v1/transaction.routes');

const {
  PRODUCT_ROUTES,
  ORDER_ROUTES,
  BUSINESS_ROUTES,
  SHIPPING_ROUTES,
  CATEGORY_ROUTES,
  TRANSACTION_ROUTES,
} = require('../../helpers/constants/route.constants');

const indexRouter = express.Router();
const v1IndexRouter = express.Router();

// version 1 - router all routes
v1IndexRouter.use('/auth', authRouter);
v1IndexRouter.use(CATEGORY_ROUTES.CATEGORIES, categoryRouter);
v1IndexRouter.use(PRODUCT_ROUTES.PRODUCTS, productRouter);
v1IndexRouter.use(ORDER_ROUTES.ORDERS, orderRouter);
v1IndexRouter.use(BUSINESS_ROUTES.BUSINESS, businessRouter);
v1IndexRouter.use(SHIPPING_ROUTES.SHIPPING, shippingRouter);
v1IndexRouter.use(TRANSACTION_ROUTES.TRANSACTION, transactionRouter);

indexRouter.use('/v1', v1IndexRouter);

module.exports = indexRouter;
