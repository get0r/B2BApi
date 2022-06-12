/* eslint-disable no-underscore-dangle */
const catchAsync = require('../../helpers/error/catchAsyncError');
const AuthServices = require('../../services/auth.service');
const BusinessService = require('../../services/business.service');

const { appLogger } = require('../../helpers/logger/appLogger');

const {
  sendErrorResponse,
  HTTP_BAD_REQUEST,
  sendSuccessResponse,
  HTTP_UNAUTHORIZED_ACCESS,
} = require('../../utils/httpResponse');
const AdminModel = require('../../database/models/admin.model');
const { hashString } = require('../../utils/hashGenerator');

const registerBusiness = catchAsync(async (req, res) => {
  const businessInfo = req.body;
  if (req.file) {
    businessInfo.logoLink = req.file.filename;
  }
  const business = await AuthServices.register(businessInfo);

  if (!business) return sendErrorResponse(res, HTTP_BAD_REQUEST, 'email already exists');

  appLogger.info(`Business Registration Successful businessId ${business._id}`);

  return sendSuccessResponse(res, 'Registered Successfully! Please Wait for approval email.');
});

// hashString('12345678').then((d) => {
//   const adminInfo = { name: 'Admin User', email: 'admin@admin.com', password: d };
//   const admin = new AdminModel(adminInfo).save();
// });

const login = catchAsync(async (req, res) => {
  const userInfo = req.body;
  const user = await AuthServices.loginUser(userInfo);

  if (!user) return sendErrorResponse(res, HTTP_UNAUTHORIZED_ACCESS, 'email or password incorrect!');
  if (!user.isApproved) return sendErrorResponse(res, HTTP_UNAUTHORIZED_ACCESS, 'Account not approved yet!');

  const token = AuthServices.generateAuthToken(user._id, user.email, user.isAdmin ? 'admin' : 'business');
  //  place the token on the cookie and send the user
  res.cookie('token', token, { httpOnly: true, secure: true, sameSite: true });
  appLogger.info(`User login Successful userId ${user._id}`);

  return sendSuccessResponse(res, { ...user, token });
});

const adminLogin = catchAsync(async (req, res) => {
  const userInfo = req.body;
  const user = await AuthServices.loginUser(userInfo, true);

  if (!user) return sendErrorResponse(res, HTTP_UNAUTHORIZED_ACCESS, 'email or password incorrect!');

  const token = AuthServices.generateAuthToken(user._id, user.email, user.isAdmin ? 'admin' : 'business');
  //  place the token on the cookie and send the user
  res.cookie('token', token, { httpOnly: true, secure: true, sameSite: true });
  appLogger.info(`Admin login Successful userId ${user._id}`);

  return sendSuccessResponse(res, { ...user, token });
});

const getUser = catchAsync(async (req, res) => {
  const { userId } = req;
  const user = await BusinessService.getOne(userId);

  return sendSuccessResponse(res, user);
});

module.exports = {
  registerBusiness,
  login,
  getUser,
  adminLogin,
};
