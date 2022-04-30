const JWT = require('jsonwebtoken');
const config = require('../config');
const AdminModel = require('../database/models/admin.model');
const BusinessModel = require('../database/models/business.model');

const { hashString, compareHash } = require('../utils/hashGenerator');

const register = async (userInfo) => {
  const { name, username, password } = userInfo;

  const userExists = await BusinessModel.findOne({ username }).lean();
  if (userExists) return null;

  const hashedPassword = await hashString(password, 10);
  const newUser = new BusinessModel({
    name,
    username,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();

  return savedUser;
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

  return user;
};

const getUser = async (userId) => {
  const user = await BusinessModel.findOne({ _id: userId }).lean();
  //   user doesn't exist so stop proceeding.
  if (!user) {
    return null;
  }

  return user;
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
};
