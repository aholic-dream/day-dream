const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TYPES = Schema.Types

const TodoSchema = new Schema({
  id: {
    type: TYPES.ObjectId
  },
  time: {
    type: Date,
    default: Date.now,
    index: true
  },
  content: {
    type: String
  },
  user_name: {
    type: String
  },
  completed: {
    type: String
  },
  status: {
    type: Boolean
  },
  complete_time: {
    type: Date,
    default: Date.now
  }
}) 

module.exports = mongoose.model('todos', TodoSchema)