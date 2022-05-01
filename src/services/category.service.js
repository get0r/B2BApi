const CategoryModel = require('../database/models/business.model');

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

module.exports = {
  create,
  getAll,
};
