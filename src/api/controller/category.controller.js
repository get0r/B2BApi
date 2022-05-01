const catchAsync = require('../../helpers/error/catchAsyncError');
const CategoryService = require('../../services/auth.service');

const {
  sendErrorResponse,
  HTTP_BAD_REQUEST,
  sendSuccessResponse,
} = require('../../utils/httpResponse');

const createCategory = catchAsync(async (req, res) => {
  const catInfo = req.body;
  const cat = await CategoryService.create(catInfo);

  if (!cat) return sendErrorResponse(res, HTTP_BAD_REQUEST, 'category already exists');

  return sendSuccessResponse(res, cat);
});

const getAllCategories = catchAsync(async (req, res) => {
  const categories = await CategoryService.getAll();

  return sendSuccessResponse(res, categories);
});

module.exports = {
  createCategory,
  getAllCategories,
};
