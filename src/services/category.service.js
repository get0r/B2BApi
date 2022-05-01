const CategoryModel = require('../database/models/business.model');

const create = async (catInfo) => {
  const newCat = new CategoryModel(catInfo);

  const savedCat = await newCat.save();

  return savedCat;
};

const getAll = async () => {
  const categories = await CategoryModel.find({ }).lean();

  return categories;
};

module.exports = {
  create,
  getAll,
};
