const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    maxlength: 255,
  },

  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },

  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  },

  imgsLink: {
    type: [String],
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },

  unit: {
    type: String,
    trim: true,
    required: true,
  },

  unitPrice: {
    type: Number,
    required: true,
  },

  prevPrice: {
    type: Number,
    trim: true,
  },

  minUnit: {
    type: Number,
    required: true,
  },

  sku: Number,

  inStock: {
    type: Number,
    required: true,
  },

  toBeProduced: Boolean,

  daysToProduce: {
    type: Number,
    default: 0,
  },

  modelNum: {
    type: String,
    trim: true,
  },

  releaseDate: {
    type: Date,
    trim: true,
  },

  manufacturer: {
    type: String,
    trim: true,
  },

  isoCertified: {
    type: Boolean,
    default: false,
  },

  variants: [{ type: String, imgIndex: Number }],

  rating: {
    info: [{
      score: Number,
      rater: mongoose.Schema.Types.ObjectId,
      lastOrder: mongoose.Schema.Types.ObjectId,
    }],
    score: Number,
  },

  shippingCost: {
    type: Number,
    default: 0,
  },

  width: Number,

  height: Number,

  weight: Number,

  startShippingIn: String,

  isReturnable: {
    type: Boolean,
    default: false,
  },

  returnCondition: String,

  returnDuration: String,

  guarantee: {
    type: String,
  },
});

productSchema.index({ name: 'text', description: 'text' });
const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
