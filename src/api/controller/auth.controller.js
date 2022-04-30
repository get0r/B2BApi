const _ = require('lodash');
const catchAsync = require('../../helpers/error/catchAsyncError');
const AuthServices = require('../../services/auth.service');

const { appLogger } = require('../../helpers/logger/appLogger');

const {
  sendErrorResponse,
  HTTP_BAD_REQUEST,
  sendSuccessResponse,
  HTTP_UNAUTHORIZED_ACCESS,
  HTTP_NOT_FOUND,
} = require('../../utils/httpResponse');

const registerBusiness = catchAsync(async (req, res) => {
  const businessInfo = req.body;
  const business = await AuthServices.register(businessInfo);

  if (!business) return sendErrorResponse(res, HTTP_BAD_REQUEST, 'email already exists');

  appLogger.info(`Business Registration Successful businessId ${user._id}`);

  return sendSuccessResponse(res, 'Registered Successfully! Please Wait for approval email.');
});

const login = catchAsync(async (req, res) => {
  const userInfo = req.body;
  const user = await AuthServices.login(userInfo);

  if (!user) return sendErrorResponse(res, HTTP_UNAUTHORIZED_ACCESS, 'email or password incorrect!');

  const token = AuthServices.generateAuthToken(user._id, user.email, user.isAdmin ? 'admin' : 'business');
  //  place the token on the cookie and send the user
  res.cookie('token', token, { httpOnly: true, secure: true, sameSite: true });
  appLogger.info(`User login Successful userId ${user._id}`);

  return sendSuccessResponse(res, { ..._.pick(user, ['_id', 'name', 'email']), token });
});

const getUser = catchAsync(async (req, res) => {
  const user = await AuthServices.getUser(req.userId);

  if (!user) return sendErrorResponse(res, HTTP_NOT_FOUND, 'Not Found!');

  const { token } = req.cookies;
  return sendSuccessResponse(res, { ..._.pick(user, ['_id', 'name', 'username']), token });
});

module.exports = {
  registerBusiness,
  login,
  getUser,
};
