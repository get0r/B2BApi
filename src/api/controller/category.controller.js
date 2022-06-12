const _ = require('lodash');
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

  if (catInfo.parent) {
    const parentCat = await CategoryService.getOne(catInfo.parent);
    catInfo.path = parentCat.path ? `${parentCat.path}/${catInfo.name}` : catInfo.name;
  } else {
    catInfo.path = catInfo.name;
    catInfo.parent = null;
  }
  const cat = await CategoryService.create(catInfo);

  if (!cat) return sendErrorResponse(res, HTTP_BAD_REQUEST, 'category already exists');

  return sendSuccessResponse(res, cat);
});

const getCategories = catchAsync(async (req, res) => {
  let categories;
  if (req.params.catId) {
    categories = await CategoryService.getOne(req.params.catId);
    if (!categories) return sendErrorResponse(res, HTTP_BAD_REQUEST, 'Category not found!');
    return sendSuccessResponse(res, categories);
  }
  categories = await CategoryService.getAll(_.omit(req.query, ['sort', 'page']), req.query.sort, Number.parseInt(req.query.page, 10));

  return sendSuccessResponse(res, categories);
});

const updateCategory = catchAsync(async (req, res) => {
  const updated = await CategoryService.updateOne(req.params.catId, req.body);

  return sendSuccessResponse(res, updated);
});

const removeCategory = catchAsync(async (req, res) => {
  const removed = await CategoryService.removeOne(req.params.catId);
  if (!removed) return sendErrorResponse(res, HTTP_BAD_REQUEST, 'Category associated with product or is parent!');
  return sendSuccessResponse(res, removed);
});

module.exports = {
  createCategory,
  updateCategory,
  removeCategory,
  getCategories,
};
