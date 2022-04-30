const mongoose = require('mongoose');

const inHouseTransactionSchema = new mongoose.Schema({
  to: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  transactionId: {
    type: mongoose.Schema.Types.ObjectId,
  },

  amount: {
    type: Number,
    required: true,
  },

  paymentOption: {
    type: String,
    enum: ['Bank', 'Credit Card', 'Paypal'],
    required: true,
  },

  specificBank: {
    type: String,
    trim: true,
  },

  dateOfTransfer: {
    type: Date,
    default: new Date(),
  },

  isApproved: {
    type: Boolean,
    default: false,
  },

});

const InHouseTransactionModel = mongoose.model('InHouseTransaction', inHouseTransactionSchema);

module.exports = InHouseTransactionModel;
