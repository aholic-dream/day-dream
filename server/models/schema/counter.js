const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TYPES = Schema.Types

let CounterScheam = new Schema({
  _id: {type: String, required: true},
  seq: {type: Number, default: 0}
})

let counter = mongoose.model('counter', CounterScheam)

