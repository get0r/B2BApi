const express = require('express');

const CategoryController = require('../../controller/category.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { ROUTES, withId } = require('../../../helpers/constants/route.constants');
const { authUser } = require('../../middlewares/auth/auth.middleware');
// const { validateAsync } = require('../../middlewares/validation/joi.validator');

const categoryRouter = express.Router();

categoryRouter
  .post(ROUTES.ROOT, authUser, CategoryController.createCategory);

categoryRouter
  .put(withId(ROUTES.ROOT, 'catId'), authUser, (req, res) => res.send(`${req.url} working!`));

categoryRouter
  .get(withId(ROUTES.ROOT, 'catId'), (req, res) => res.send(`${req.url} working!`));

categoryRouter
  .get(ROUTES.ROOT, (req, res) => res.send(`${req.url} working!`));

categoryRouter
  .delete(withId(ROUTES.ROOT, 'catId'), authUser, (req, res) => res.send(`${req.url} working!`));

module.exports = categoryRouter;
