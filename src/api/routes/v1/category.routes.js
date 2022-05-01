const express = require('express');

// const CategoryController = require('../../controller/auth.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { CATEGORY_ROUTES } = require('../../../helpers/constants/route.constants');

const categoryRouter = express.Router();

categoryRouter
  .post(CATEGORY_ROUTES.CATEGORIES, CategoryController.createCategory);

categoryRouter
  .get(CATEGORY_ROUTES.CATEGORIES, CategoryController.getAllCategories);

module.exports = categoryRouter;
