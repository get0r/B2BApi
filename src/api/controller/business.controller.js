const _ = require('lodash');
const catchAsync = require('../../helpers/error/catchAsyncError');
const BusinessService = require('../../services/business.service');

const {
  sendErrorResponse,
  HTTP_BAD_REQUEST,
  sendSuccessResponse,
} = require('../../utils/httpResponse');

const getBusiness = catchAsync(async (req, res) => {
  let business;
  if (req.params.bId) {
    business = await BusinessService.getOne(req.params.bId);
    if (!business) return sendErrorResponse(res, HTTP_BAD_REQUEST, 'Business account not found!');
    return sendSuccessResponse(res, business);
  }
  business = await BusinessService.getAll(_.omit(req.query, ['sort', 'page']), req.query.sort, Number.parseInt(req.query.page, 10));
  return sendSuccessResponse(res, business);
});

const approveBusiness = catchAsync(async (req, res) => {
  const updated = await BusinessService.approveOne(req.params.bId);

  return sendSuccessResponse(res, updated);
});

const banUnBanBusiness = catchAsync(async (req, res) => {
  const updated = await BusinessService.banUnbanOne(req.params.bId);

  return sendSuccessResponse(res, updated);
});

const updateBusiness = catchAsync(async (req, res) => {
  const updated = await BusinessService.updateOne(req.params.bId, req.body);

  return sendSuccessResponse(res, updated);
});

const removeBusiness = catchAsync(async (req, res) => {
  const removed = await BusinessService.removeOne(req.params.bId);

  return sendSuccessResponse(res, removed);
});

module.exports = {
  approveBusiness,
  removeBusiness,
  banUnBanBusiness,
  updateBusiness,
  getBusiness,
};
