const express = require('express');

const authRouter = require('./v1/auth.routes');
const productRouter = require('./v1/product.routes');

const indexRouter = express.Router();
const v1IndexRouter = express.Router();

// version 1 - router all routes
v1IndexRouter.use('/auth', authRouter);
v1IndexRouter.use('/store', productRouter);

indexRouter.use('/v1', v1IndexRouter);

module.exports = indexRouter;
