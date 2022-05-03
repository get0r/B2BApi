const _ = require('lodash');
const TransactionModel = require('../database/models/transaction.model');

const create = async (transactionInfo) => {
  const newTransaction = new TransactionModel(transactionInfo);

  const savedTransaction = await newTransaction.save();

  return savedTransaction;
};

// const getAll = async (query = {}, sort = {}, page = 1) => {
//   const skip = (page - 1) * PAGE_SIZE;
//   let finalQuery = query;
//   let categories = [];
//   if (query && query.q) {
//     const searchQuery = { $text: { $search: query.q } };
//     const fieldAdd = { score: { $meta: 'textScore' } };
//     finalQuery = _.omit(query, ['q']);
//     categories = await CategoryModel.find({ ...searchQuery, ...finalQuery }, fieldAdd)
//       .skip(skip)
//       .sort(sort)
//       .limit(PAGE_SIZE)
//       .lean();
//   } else {
//     categories = await CategoryModel.find(finalQuery)
//       .skip(skip)
//       .sort(sort)
//       .limit(PAGE_SIZE)
//       .lean();
//   }

//   return categories;
// };

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
  create,
//   getAll,
//   getOne,
//   updateOne,
//   removeOne,
};
