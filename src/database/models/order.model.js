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

  product: {},

  shippingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shipping',
    required: true,
  },

  totalPrice: {
    type: Number,
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

});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;
