const mongoose = require('mongoose');

const productReportSchema = new mongoose.Schema({
  reporter: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  reason: {
    type: String,
    enum: ['Fake', 'Not Exact', 'Quality Problem'],
    default: 'Quality Problem',
  },

  productId: {
    type: Object,
  },

}, {
  timestamps: true,
});

const ProductReportModel = mongoose.model('productReport', productReportSchema);

module.exports = ProductReportModel;
