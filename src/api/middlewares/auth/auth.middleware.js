const JWT = require('jsonwebtoken');
const { tokenSecret } = require('../../../config');

const catchAsync = require('../../../helpers/error/catchAsyncError');

const { appLogger } = require('../../../helpers/logger/appLogger');
const { sendErrorResponse, HTTP_UNAUTHORIZED_ACCESS } = require('../../../utils/httpResponse');

/**
 * a method to authenticate a user from jwt token and set props on the request object.
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next the next endpoint function in the middleware chain
 * @returns the result of the next endpoint function
 */
const authUser = catchAsync(async (req, res, next) => {
  const {
    token, tokenLocal, tokenLocalA, tokenLocalH,
  } = req.cookies;

  if (!token && !tokenLocal && !tokenLocalA && !tokenLocalH) return sendErrorResponse(res, HTTP_UNAUTHORIZED_ACCESS, 'Sign in first!');

  const verifiedUser = await JWT.verify(token || tokenLocal || tokenLocalA
    || tokenLocalH, tokenSecret);
  if (!verifiedUser) return sendErrorResponse(res, HTTP_UNAUTHORIZED_ACCESS, 'Unauthorized Access.');

  req.userId = verifiedUser.id;
  req.email = verifiedUser.email;
  req.role = verifiedUser.role;
  appLogger.info(`Authentication successful for user with id ${verifiedUser.id}`);

  return next();
});

const isUserAdmin = catchAsync(async (req, res, next) => (req.role === 'admin' ? next() : sendErrorResponse(res, HTTP_UNAUTHORIZED_ACCESS, 'Only Admin can do that!')));

module.exports = { authUser, isUserAdmin };
