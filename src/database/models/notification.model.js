const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Self', 'Admin', 'customer'],
    required: true,
  },

  message: {
    type: String,
    trim: true,
    required: true,
  },

  date: {
    type: Date,
    default: new Date(),
  },

  link: String,

});

const NotificationModel = mongoose.model('Notification', notificationSchema);

module.exports = NotificationModel;
