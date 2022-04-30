const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    trim: true,
    required: true,
  },

  path: {
    type: String,
    required: true,
  },
});

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
