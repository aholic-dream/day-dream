const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TYPES = Schema.Types

const UserSchema = new Schema({
  id: {
    type: TYPES.ObjectId
  },
  registered: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String
  },
  loginname: {
    type: String
  },
  pass: {
    type: String
  },
  email: {
    type: String
  },
  active: {
    type: Boolean,
    default: false
  },
  accessToken: {
    type: String
  }
})

module.exports = mongoose.model('Users', UserSchema)