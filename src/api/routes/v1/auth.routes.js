const express = require('express');

const AuthController = require('../../controller/auth.controller');
// const AuthValidator = require('../../middlewares/validation/auth.validator');

const { AUTH_ROUTES } = require('../../../helpers/constants/route.constants');
const { validateAsync } = require('../../middlewares/validation/joi.validator');
const { registerSchema, loginSchema } = require('../../../database/validationSchemas/auth.joi.schema');
const { authUser } = require('../../middlewares/auth/auth.middleware');

const authRouter = express.Router();

authRouter
  .post(AUTH_ROUTES.REGISTER, validateAsync(registerSchema), AuthController.registerBusiness);

authRouter
  .post(AUTH_ROUTES.LOGIN, validateAsync(loginSchema), AuthController.login);

authRouter
  .get(AUTH_ROUTES.USER, authUser, AuthController.getUser);

module.exports = authRouter;
