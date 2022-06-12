/* eslint-disable no-underscore-dangle */
const {
  sendSuccessResponse,
} = require('../../utils/httpResponse');

const catchAsync = require('../../helpers/error/catchAsyncError');
const RootServices = require('../../services/root.service');
const TransactionModel = require('../../database/models/transaction.model');

const getMyTransactions = catchAsync(async (req, res) => {
  const query = { from: req.userId };
  const transaction = await RootServices.getOperatedData(TransactionModel, query);

  return sendSuccessResponse(res, transaction);
});

module.exports = {
  getMyTransactions,
};
