const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    maxlength: 255,
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

  isAdmin: {
    type: Boolean,
    default: true,
  },

});

const AdminModel = mongoose.model('Admin', adminSchema);

module.exports = AdminModel;
