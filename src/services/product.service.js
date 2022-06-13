const RootServices = require('./root.service');
const BusinessService = require('./business.service');
const ProductModel = require('../database/models/product.model');
const AdProductModel = require('../database/models/ad.products.model');
const OrderModel = require('../database/models/order.model');

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

const getRecommendedProducts = async (ownerId, sort = {}, page = 1) => {
  const owner = await BusinessService.getOne(ownerId);
  const recommendedProducts = await RootServices
    .getOperatedData(ProductModel, { categoryId: { $in: owner.tagIds } }, sort, page);

  return recommendedProducts;
};

const banUnbanOne = async (bId) => {
  const product = await getOne(bId);
  if (!product) return null;

  const isUpdated = await updateOne(bId, { isBanned: !product.isBanned });
  if (!isUpdated) return null;
  return true;
};

const removeOne = async (bId) => {
  const product = await getOne(bId);
  if (!product) return null;
  await ProductModel.deleteOne({ _id: bId });
  return true;
};

const setAdProduct = async (pId, startDate, endDate, priority) => {
  const adProduct = new AdProductModel({
    productId: pId,
    startDate,
    endDate,
    priority,
  });

  const savedAdProduct = await adProduct.save();

  return savedAdProduct;
};

const getAdProducts = async (page = 1) => {
  const adProducts = await RootServices
    .getOperatedData(AdProductModel, {}, { priority: 1 }, page);

  return adProducts;
};

const rateProduct = async (productId, score, raterId) => {
  const lastOrder = await OrderModel.findOne({ orderedId: raterId, 'product._id': productId });
  if (!lastOrder) return null;

  const product = await getOne(productId);
  if (product.rating.find((r) => r.raterId === raterId)) return null;

  await ProductModel.updateOne({ _id: productId }, { $push: { rating: { raterId, score } } });
  const productD = await getOne(productId);

  let ratingScore = 0;
  productD.rating.forEach((rate) => ratingScore += rate.score);
  const finalScore = ratingScore / productD.rating.length;

  const finalProduct = await updateOne(productId, { ratingScore: finalScore });
  return finalProduct;
};

module.exports = {
  create,
  getAll,
  getOne,
  updateOne,
  getRecommendedProducts,
  banUnbanOne,
  setAdProduct,
  getAdProducts,
  removeOne,
  rateProduct,
};
