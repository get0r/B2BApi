/* eslint-disable no-underscore-dangle */
const {
  sendErrorResponse,
  HTTP_BAD_REQUEST,
  sendSuccessResponse,
} = require('../../utils/httpResponse');

const catchAsync = require('../../helpers/error/catchAsyncError');
const BusinessService = require('../../services/business.service');
const OrderService = require('../../services/order.service');
const TransactionService = require('../../services/transaction.service');
const ProductService = require('../../services/product.service');
const ShippingModel = require('../../database/models/shipping.model');
const OrderModel = require('../../database/models/order.model');

const create = catchAsync(async (req, res) => {
  const {
    ordererId, products, totalPrice, city, address1, address2,
  } = req.body;
  const business = await BusinessService.getOne(ordererId);
  if (!business) return sendErrorResponse(res, HTTP_BAD_REQUEST, 'Product or Business not found!');

  // TODO: For each ordered product
  await products.forEach(async (product) => {
    const orderedProduct = await ProductService.getOne(product._id);
    const productOwner = await BusinessService.getOne(orderedProduct.ownerId);
    // TODO: get all products substract numOfUnits updateMany
    orderedProduct.inStock -= product.numOfUnits;
    productOwner.availableBalance += product.totalPrice - (product.totalPrice * 0.05);
    await BusinessService.updateOne(productOwner._id, productOwner);
    await ProductService.updateOne(product._id, orderedProduct);

    // TODO: CREATE TRANSACTION
    const transaction = {
      from: ordererId,
      amount: totalPrice,
      paymentOption: 'Paypal',
    };
    const newTransaction = await TransactionService.create(transaction);

    // TODO: CREATE SHIPPING AND ASSOCIATE
    const shipping = new ShippingModel({
      from: product.ownerId,
      to: ordererId,
      departure: {
        city: productOwner.city,
        address1: productOwner.address1,
        address2: productOwner.address2,
      },
      destination: {
        city,
        address1,
        address2,
      },
    });

    const newShipping = await shipping.save();
    // TODO: INITIALIZE ORDER DATA
    // TODO: ASSOCIATE TRANSACTION, SHIPPING AND BUSINESS WITH ORDER
    const newOrder = new OrderModel({
      orderedFrom: product.ownerId,
      orderedBy: ordererId,
      product,
      shippingId: newShipping._id,
      totalPrice,
      transactionId: newTransaction._id,
    });

    // TODO: SAVE ORDER
    await newOrder.save();
  });
  return sendSuccessResponse(res, 'Products Ordered Successfully!');
});

const getMyOrders = catchAsync(async (req, res) => {
  const query = { $or: [{ orderedBy: req.userId }, { orderedFrom: req.userId }] };
  const orders = await OrderService.getMyOrders(query);

  return sendSuccessResponse(res, orders);
});

const updateOrderStatus = catchAsync(async (req, res) => {
  const updated = await OrderService.updateOne(req.params.oId, req.body);

  return sendSuccessResponse(res, updated);
});
module.exports = {
  create,
  getMyOrders,
  updateOrderStatus,
};
