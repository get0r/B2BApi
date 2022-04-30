const mongoose = require('mongoose');

const productReportSchema = new mongoose.Schema({
  reporter: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  reason: {
    type: String,
    enum: ['Fake', 'Not Exact', 'Quality Problem'],
    required: true,
  },

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  reportedDate: {
    type: Date,
    default: new Date(),
  },

  lastOrder: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const ProductReportModel = mongoose.model('productReport', productReportSchema);

module.exports = ProductReportModel;
