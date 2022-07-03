const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  request: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'requests',
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('message', MessageSchema);
