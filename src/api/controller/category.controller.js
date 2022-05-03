const catchAsync = require('../../helpers/error/catchAsyncError');
const CategoryService = require('../../services/category.service');

const {
  sendErrorResponse,
  HTTP_BAD_REQUEST,
  sendSuccessResponse,
  HTTP_UNAUTHORIZED_ACCESS,
} = require('../../utils/httpResponse');

const createCategory = catchAsync(async (req, res) => {
  const catInfo = req.body;
  if (!catInfo.parent && !(req.role === 'admin')) sendErrorResponse(res, HTTP_UNAUTHORIZED_ACCESS, 'Only admin can create general categories!');

  const parentCat = await CategoryService.getOne(catInfo.parent);
  catInfo.path = parentCat.path ? `${parentCat.path}/${catInfo.name}` : catInfo.name;
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
