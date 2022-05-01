const RootServices = require('./root.service');
const BusinessModel = require('../database/models/business.model');

const getAll = async (query = {}, sort = {}, page = 1) => {
  const businesses = await RootServices.getOperatedData(BusinessModel, query, sort, page);
  return businesses;
};

// const getOne = async (catId) => {
//   const cat = await CategoryModel.findById(catId).lean();

//   if (!cat) return null;
//   return cat;
// };

// const updateOne = async (catId, newInfo) => {
//   const cat = await getOne(catId);
//   if (!cat) return null;
//   const updateInfo = { ...cat, ...newInfo };
//   await CategoryModel.updateOne({ _id: catId }, updateInfo);
//   return true;
// };

// const removeOne = async (catId) => {
//   const cat = await getOne(catId);
//   if (!cat) return null;
//   await CategoryModel.deleteOne({ _id: catId });
//   return true;
// };

module.exports = {
  getAll,
//   getOne,
//   updateOne,
//   removeOne,
};
