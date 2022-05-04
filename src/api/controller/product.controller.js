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

  // TODO: Upload file and get image link to image links field

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
  product = await ProductService.getAll(_.omit(req.query, ['sort', 'page']), req.query.sort, Number.parseInt(req.query.page, 10));

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
  const recommended = await ProductService.getRecommendedProducts(req.params.bId);

  return sendSuccessResponse(res, recommended);
});

const getAdProducts = catchAsync(async (req, res) => {
  const adProducts = await ProductService.getAdProducts();

  return sendSuccessResponse(res, adProducts);
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
};
