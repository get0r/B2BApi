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

const getOne = async (bId) => {
  const product = await ProductModel.findById(bId).lean();

  if (!product) return null;
  return product;
};

const updateOne = async (bId, newInfo) => {
  const product = await getOne(bId);
  if (!product) return null;
  const updateInfo = { ...product, ...newInfo };
  await ProductModel.updateOne({ _id: bId }, updateInfo);
  return true;
};

// const approveOne = async (bId) => {
//   const isUpdated = await updateOne(bId, { isApproved: true });
//   if (!isUpdated) return null;
//   return true;
// };

// const banUnbanOne = async (bId) => {
//   const product = await getOne(bId);
//   if (!product) return null;

//   const isUpdated = await updateOne(bId, { isBanned: !product.isBanned });
//   if (!isUpdated) return null;
//   return true;
// };

// const removeOne = async (bId) => {
//   const product = await getOne(bId);
//   if (!product) return null;
//   await productModel.deleteOne({ _id: bId });
//   return true;
// };

// const getTopSellers = async (page = 1) => {
//   const topproduct = await RootServices
//     .getOperatedData(productModel, {}, { availableBalance: 1 }, page);
//   return topproduct;
// };

module.exports = {
  create,
  getAll,
  getOne,
  updateOne,
//   approveOne,
//   banUnbanOne,
//   getTopSellers,
//   removeOne,
};
