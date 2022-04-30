const mongoose = require('mongoose');

const adProductSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  startDate: {
    type: Date,
    required: true,
  },

  endDate: {
    type: Date,
    required: true,
  },

  bannerLink: String,

  priority: {
    type: Number,
    required: true,
  },

});

const AdProductModel = mongoose.model('AdProduct', adProductSchema);

module.exports = AdProductModel;
