const _ = require('lodash');
const catchAsync = require('../../helpers/error/catchAsyncError');
const ProductService = require('../../services/product.service');

const {
  sendErrorResponse,
  HTTP_BAD_REQUEST,
  sendSuccessResponse,
} = require('../../utils/httpResponse');

const createProduct = catchAsync(async (req, res) => {
  const productInfo = req.body;

  if (req.files) {
    productInfo.imgsLink = [
      req.files.productImages1[0] && req.files.productImages1[0].filename,
      req.files.productImages2[0] && req.files.productImages2[0].filename,
    ];
  }

  const product = await ProductService.create(productInfo);

  if (!product) return sendErrorResponse(res, HTTP_BAD_REQUEST, 'Product already exists');

  return sendSuccessResponse(res, product);
});

const getProducts = catchAsync(async (req, res) => {
  let product;
  if (req.params.pId) {
    product = await ProductService.getOne(req.params.pId);
    if (!product) return sendErrorResponse(res, HTTP_BAD_REQUEST, 'product not found!');
    return sendSuccessResponse(res, product);
  }
  if (req.params.bId) {
    product = await ProductService.getAll({ ..._.omit(req.query, ['sort', 'page']), ownerId: req.params.bId }, req.query.sort, Number.parseInt(req.query.page, 10));
  } else {
    product = await ProductService.getAll(_.omit(req.query, ['sort', 'page']), req.query.sort, Number.parseInt(req.query.page, 10));
  }

  return sendSuccessResponse(res, product);
});

const banUnBanProduct = catchAsync(async (req, res) => {
  const updated = await ProductService.banUnbanOne(req.params.pId);

  return sendSuccessResponse(res, updated);
});

const updateProduct = catchAsync(async (req, res) => {
  const updated = await ProductService.updateOne(req.params.pId, req.body);

  return sendSuccessResponse(res, updated);
});

const removeProduct = catchAsync(async (req, res) => {
  const removed = await ProductService.removeOne(req.params.pId);

  return sendSuccessResponse(res, removed);
});

const setProductAd = catchAsync(async (req, res) => {
  const adProduct = await ProductService
    .setAdProduct(req.params.pId, req.body.startDate, req.body.endDate, req.body.priority);

  return sendSuccessResponse(res, adProduct);
});

const getRecommendedProducts = catchAsync(async (req, res) => {
  const recommended = await ProductService.getRecommendedProducts(req.userId);

  return sendSuccessResponse(res, recommended);
});

const getAdProducts = catchAsync(async (req, res) => {
  const adProducts = await ProductService.getAdProducts();

  return sendSuccessResponse(res, adProducts);
});

const rateProduct = catchAsync(async (req, res) => {
  const rated = await ProductService.rateProduct(req.params.pId, req.body.raterId, req.body.score);
  if (!rated) sendErrorResponse(res, HTTP_BAD_REQUEST, 'Product not found!');

  return sendSuccessResponse(res, rated);
});

module.exports = {
  createProduct,
  removeProduct,
  banUnBanProduct,
  updateProduct,
  getProducts,
  setProductAd,
  getRecommendedProducts,
  getAdProducts,
  rateProduct,
};
