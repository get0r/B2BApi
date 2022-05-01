const CategoryModel = require('../database/models/category.model');

const PAGE_SIZE = 10;

const create = async (catInfo) => {
  const newCat = new CategoryModel(catInfo);

  const savedCat = await newCat.save();

  return savedCat;
};

const getAll = async (query = {}, sort = {}, page = 1) => {
  const skip = (page - 1) * PAGE_SIZE;
  const categories = await CategoryModel.find(query)
    .skip(skip)
    .sort(sort)
    .limit(PAGE_SIZE)
    .lean();

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

module.exports = {
  create,
  getAll,
  getOne,
  updateOne,
};
