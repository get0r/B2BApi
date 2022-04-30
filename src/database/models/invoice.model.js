const mongoose = require('mongoose');

const orderInfoSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  unitPrice: Number,
  shippingPrice: Number,
  numOfUnit: Number,
  totalPrice: Number,
});

const invoiceSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  to: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  date: {
    type: Date,
    default: new Date(),
  },

  orders: {
    type: [orderInfoSchema],
    required: true,
  },

  subTotal: {
    type: Number,
    required: true,
  },

  tax: {
    type: Number,
    required: true,
  },

  total: {
    type: Number,
    required: true,
  },

  totalShipping: {
    type: Number,
    required: true,
  },

  paymentOptionUsed: {
    type: String,
    enum: ['Bank', 'Credit Card', 'Paypal'],
  },
});

const InvoiceModel = mongoose.model('Invoice', invoiceSchema);

module.exports = InvoiceModel;
