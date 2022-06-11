/* eslint-disable no-underscore-dangle */
const {
  sendSuccessResponse,
} = require('../../utils/httpResponse');

const catchAsync = require('../../helpers/error/catchAsyncError');
const ShippingService = require('../../services/shipping.service');

const getMyShippings = catchAsync(async (req, res) => {
  const query = { $or: [{ from: req.userId }, { to: req.userId }] };
  const shippings = await ShippingService.getMyShippings(query);

  return sendSuccessResponse(res, shippings);
});

const updateShippingInfo = catchAsync(async (req, res) => {
  const updated = await ShippingService.updateOne(req.params.sId, req.body);

  return sendSuccessResponse(res, updated);
});

module.exports = {
  getMyShippings,
  updateShippingInfo,
};
