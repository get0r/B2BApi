const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  username: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    maxlength: 100,
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 255,
  },
});

const AdminModel = mongoose.model('Admin', adminSchema);

module.exports = AdminModel;
