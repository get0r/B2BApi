const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },

  status: {
    type: String,
    enum: ['Processing', 'Moving', 'Stopped', 'Reached'],
    default: 'Moving',
  },

  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  },

  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  },

  transportBy: {
    type: String,
    enum: ['Air', 'Water', 'Land'],
    default: 'Land',
  },

  departure: {
    city: String,
    address1: String,
    lat: String,
    long: String,
  },

  destination: {
    city: String,
    address1: String,
    lat: String,
    long: String,
  },

  returnStatus: {
    type: String,
    enum: ['Not Returned', 'On Going', 'Returned'],
    default: 'Not Returned',
  },

  estimatedDistance: Number,

  transportRep: {
    name: String,
    phone: String,
    position: String,
  },

  leftOn: {
    type: Date,
    default: new Date(),
  },

  timeToReach: String,

});

const ShippingModel = mongoose.model('Shipping', shippingSchema);

module.exports = ShippingModel;
