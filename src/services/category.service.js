const RootService = require('./root.service');
const CategoryModel = require('../database/models/category.model');

const create = async (catInfo) => {
  const newCat = new CategoryModel(catInfo);

  const savedCat = await newCat.save();

  return savedCat;
};

const getAll = async (query = {}, sort = {}, page = 1) => {
  const categories = await RootService.getOperatedData(CategoryModel, query, sort, page);

  return categories;
};

const getOne = async (catId) => {
  const cat = await CategoryModel.findById(catId).lean();

  if (!cat) return null;
  return cat;
};

const updateOne = async (catId, newInfo) => {
  const cat = await getOne(catId);
  if (!cat) return null;
  const updateInfo = { ...cat, ...newInfo };
  await CategoryModel.updateOne({ _id: catId }, updateInfo);
  return true;
};

const removeOne = async (catId) => {
  const cat = await getOne(catId);
  if (!cat) return null;
  await CategoryModel.deleteOne({ _id: catId });
  return true;
};

module.exports = {
  create,
  getAll,
  getOne,
  updateOne,
  removeOne,
};
