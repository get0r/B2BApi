const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  bName: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  logoLink: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    trim: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 255,
  },

  description: {
    type: String,
    trim: true,
  },

  publicEmail: {
    type: String,
    trim: true,
  },

  tel: {
    type: String,
    trim: true,
  },

  country: {
    type: String,
    trim: true,
    default: 'Ethiopia',
  },

  city: {
    type: String,
    trim: true,
    required: true,
  },

  address1: {
    type: String,
    trim: true,
  },

  address2: {
    type: String,
    trim: true,
  },

  tinNo: {
    type: String,
    trim: true,
    required: true,
  },

  licenseLink: {
    type: String,
    required: true,
  },

  companySize: {
    type: String,
    enum: ['SM', 'MD', 'LG'],
    required: true,
  },

  supplier: {
    type: Boolean,
    default: false,
  },

  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: 'Category',
    trim: true,
  },

  tagIds: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
  },

  isoCertified: Boolean,

  repName: {
    type: String,
    trim: true,
    required: true,
  },

  repTel: {
    type: String,
    trim: true,
    required: true,
  },

  repEmail: {
    type: String,
    trim: true,
  },

  repPosition: {
    type: String,
    trim: true,
    required: true,
  },

  paymentInfo: [paymentSchema],
});

const paymentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Bank', 'Credit Card', 'Paypal'],
    required: true,
  },

  accNoOrId: {
    type: String,
    trim: true,
    required: true,
  },

  holderName: {
    type: String,
    trim: true,
    required: true,
  },
});

const BusinessModel = mongoose.model('Business', businessSchema);

module.exports = BusinessModel;
