const RootServices = require('./root.service');
const BusinessModel = require('../database/models/business.model');

const getAll = async (query = {}, sort = {}, page = 1) => {
  const businesses = await RootServices.getOperatedData(BusinessModel, query, sort, page);
  return businesses;
};

const getOne = async (bId) => {
  const business = await BusinessModel.findById(bId).lean();

  if (!business) return null;
  return business;
};

const updateOne = async (bId, newInfo) => {
  const business = await getOne(bId);
  if (!business) return null;
  const updateInfo = { ...business, ...newInfo };
  await BusinessModel.updateOne({ _id: bId }, updateInfo);
  return true;
};

const removeOne = async (bId) => {
  const business = await getOne(bId);
  if (!business) return null;
  await BusinessModel.deleteOne({ _id: bId });
  return true;
};

module.exports = {
  getAll,
  getOne,
  updateOne,
  removeOne,
};
