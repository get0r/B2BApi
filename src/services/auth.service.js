const JWT = require('jsonwebtoken');
const _ = require('lodash');

const config = require('../config');
const AdminModel = require('../database/models/admin.model');
const BusinessModel = require('../database/models/business.model');

const { hashString, compareHash } = require('../utils/hashGenerator');

const register = async (businessInfo) => {
  const { email, password } = businessInfo;

  const businessExists = await BusinessModel.findOne({ email }).lean();
  if (businessExists) return null;

  const hashedPassword = await hashString(password, 10);
  const newBusiness = new BusinessModel({ ...businessInfo, password: hashedPassword });

  const savedBusiness = await newBusiness.save();

  return savedBusiness;
};

const loginUser = async ({ email, password }) => {
  let user = await BusinessModel.findOne({ email }).lean();
  //   user doesn't exist so stop proceeding.
  if (!user) {
    user = await AdminModel.findOne({ email }).lean();
    if (!user) return null;
  }

  const isPasswordRight = await compareHash(password, user.password);

  if (!isPasswordRight) {
    return null;
  }

  return _.omit(user, ['password', '__v']);
};

const getUser = async (userId) => {
  const user = await BusinessModel.findOne({ _id: userId }).lean();
  //   user doesn't exist so stop proceeding.
  if (!user) {
    return null;
  }

  return user;
};

const resetPassword = async (userId, newPassword) => {
  const user = getUser(userId);
  if (!user) return null;
  const hashedPassword = await hashString(newPassword, 10);
  user.password = hashedPassword;
  await BusinessModel.updateOne({ _id: user._id }, user);
  return true;
};

const generateAuthToken = (userId, email, role) => {
  const payload = { id: userId, email, role };
  return JWT.sign(payload, config.tokenSecret, { expiresIn: '48h' });
};

module.exports = {
  register,
  loginUser,
  getUser,
  generateAuthToken,
  resetPassword,
};
