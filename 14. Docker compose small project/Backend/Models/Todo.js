const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  },
  actions: {
    update: {
      type: Boolean,
      default: true
    },
    delete: {
      type: Boolean,
      default: true
    }
  },
  dueDate: {
    type: Date,
    default: null
  }
});

module.exports = mongoose.model('Todo', TodoSchema);
