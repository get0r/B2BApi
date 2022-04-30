const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderedFrom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  },

  orderedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  },

  noOfUnits: {
    type: Number,
    required: true,
  },

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },

  shippingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shipping',
    required: true,
  },

  pricePerUnit: {
    type: Number,
    required: true,
  },

  totalPrice: {
    type: Number,
    required: true,
  },

  tax: {
    type: Number,
    required: true,
  },

  totalPayment: {
    type: Number,
    required: true,
  },

  isPaid: {
    type: Boolean,
    default: false,
  },

  paymentOption: {
    type: String,
    enum: ['Bank', 'Credit Card', 'Paypal'],
    required: true,
  },

  transactionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction',
  },

  status: {
    type: String,
    enum: ['On Ship', 'Completed', 'Returned', 'On Return', 'Processing'],
    default: 'Processing',
  },

  isReturned: {
    type: Boolean,
    default: false,
  },

  isRequestedForReturn: {
    type: Boolean,
    default: false,
  },

  isReturnApproved: {
    type: Boolean,
    default: false,
  },

  returnPrice: Number,

});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;
