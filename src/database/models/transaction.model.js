const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
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
  },
  {
    timestamps: true,
  },
);

const TransactionModel = mongoose.model('Transaction', transactionSchema);

module.exports = TransactionModel;
