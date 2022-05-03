const { stripeSecret } = require('../../config');
const stripe = require('stripe')(stripeSecret);

const {
  sendErrorResponse,
  HTTP_BAD_REQUEST,
  sendSuccessResponse,
} = require('../../utils/httpResponse');

const catchAsync = require('../../helpers/error/catchAsyncError');
const BusinessService = require('../../services/business.service');
const ProductService = require('../../services/product.service');

const create = catchAsync(async (req, res) => {
  const {
    ordererId, productId, totalPayment, totalPrice, units, stripeToken,
  } = req.body;
  const business = await BusinessService.getOne(ordererId);
  const product = await ProductService.getOne(productId);

  if (!business || !product) return sendErrorResponse(res, HTTP_BAD_REQUEST, 'Product or Business not found!');

  console.log(stripeSecret);
  const internalTotal = (product.unitPrice * units) + (product.unitPrice * units * 0.15);
  if (internalTotal !== totalPrice) return sendErrorResponse(res, HTTP_BAD_REQUEST, 'Price mismatch!');

  return stripe.customers.create({
    name: business.name,
    email: business.email,
    // source: stripeToken,
  })
    .then((customer) => stripe.charges.create({
      amount: totalPayment,
      currency: 'usd',
      customer: customer.id,
    }))
    .then((resS) => {
      // TODO: CREATE TRANSACTION
      // TODO: ASSOCIATE TRANSACTION ID WITH ORDER
      // TODO: CREATE SHIPPING AND ASSOCIATE
      // TODO: SAVE ORDER
      sendSuccessResponse(res, resS);
    })
    .catch((err) => { throw err; });
});

// const getAllCategories = catchAsync(async (req, res) => {
//   const categories = await CategoryService.getAll();

//   return sendSuccessResponse(res, categories);
// });

module.exports = {
  create,
  // getAllCategories,
};
