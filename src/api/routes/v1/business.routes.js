const express = require('express');

const BusinessController = require('../../controller/business.controller');

const { BUSINESS_ROUTES, ROUTES, withId } = require('../../../helpers/constants/route.constants');
const { authUser, isUserAdmin } = require('../../middlewares/auth/auth.middleware');

const businessRouter = express.Router();

businessRouter
  .put(withId(ROUTES.ROOT, 'bId'), BusinessController.updateBusiness);

businessRouter
  .get(withId(ROUTES.ROOT, 'bId'), BusinessController.getBusiness);

businessRouter
  .delete(withId(ROUTES.ROOT, 'bId'), [authUser, isUserAdmin], BusinessController.removeBusiness);

businessRouter
  .put(withId(BUSINESS_ROUTES.BUSINESS_APPROVE, 'bId'), [authUser, isUserAdmin], BusinessController.approveBusiness);

businessRouter
  .put(withId(BUSINESS_ROUTES.BUSINESS_BANUNBAN, 'bId'), [authUser, isUserAdmin], BusinessController.banUnBanBusiness);

businessRouter
  .get(ROUTES.ROOT, BusinessController.getBusiness);

module.exports = businessRouter;
