const RootServices = require('./root.service');
const ProductModel = require('../database/models/product.model');

const create = async (productInfo) => {
  const newProduct = new ProductModel(productInfo);

  const savedProduct = await newProduct.save();

  return savedProduct;
};

const getAll = async (query = {}, sort = {}, page = 1) => {
  const products = await RootServices.getOperatedData(ProductModel, query, sort, page);
  return products;
};

// const getOne = async (bId) => {
//   const business = await BusinessModel.findById(bId).lean();

//   if (!business) return null;
//   return business;
// };

// const updateOne = async (bId, newInfo) => {
//   const business = await getOne(bId);
//   if (!business) return null;
//   const updateInfo = { ...business, ...newInfo };
//   await BusinessModel.updateOne({ _id: bId }, updateInfo);
//   return true;
// };

// const approveOne = async (bId) => {
//   const isUpdated = await updateOne(bId, { isApproved: true });
//   if (!isUpdated) return null;
//   return true;
// };

// const banUnbanOne = async (bId) => {
//   const business = await getOne(bId);
//   if (!business) return null;

//   const isUpdated = await updateOne(bId, { isBanned: !business.isBanned });
//   if (!isUpdated) return null;
//   return true;
// };

// const removeOne = async (bId) => {
//   const business = await getOne(bId);
//   if (!business) return null;
//   await BusinessModel.deleteOne({ _id: bId });
//   return true;
// };

// const getTopSellers = async (page = 1) => {
//   const topBusiness = await RootServices
//     .getOperatedData(BusinessModel, {}, { availableBalance: 1 }, page);
//   return topBusiness;
// };

module.exports = {
  create,
  getAll,
//   getOne,
//   updateOne,
//   approveOne,
//   banUnbanOne,
//   getTopSellers,
//   removeOne,
};
