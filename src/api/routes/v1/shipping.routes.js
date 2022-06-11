const express = require('express');

const ShippingController = require('../../controller/shipping.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { ROUTES, withId } = require('../../../helpers/constants/route.constants');
const { authUser } = require('../../middlewares/auth/auth.middleware');
// const { validateAsync } = require('../../middlewares/validation/joi.validator');

const shippingRouter = express.Router();

shippingRouter
  .put(withId(ROUTES.ROOT, 'sId'), ShippingController.updateShippingInfo);

shippingRouter
  .get(ROUTES.ROOT, authUser, ShippingController.getMyShippings);

shippingRouter
  .get(withId(ROUTES.ROOT, 'shipId'), (req, res) => res.send(`${req.url} working!`));

shippingRouter
  .get(withId(ROUTES.ROOT, 'oId'), (req, res) => res.send(`${req.url} working!`));

module.exports = shippingRouter;
