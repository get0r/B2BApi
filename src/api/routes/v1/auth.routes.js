const express = require('express');

const AuthController = require('../../controller/auth.controller');
const AuthValidator = require('../../middlewares/validation/auth.validator');

const { AUTH_ROUTES } = require('../../../helpers/constants/route.constants');

const authRouter = express.Router();

authRouter
  .post(AUTH_ROUTES.REGISTER, (req, res) => res.send(`${req.url} working.`));

authRouter
  .post(AUTH_ROUTES.LOGIN, (req, res) => res.send(`${req.url} working.`));

module.exports = authRouter;
