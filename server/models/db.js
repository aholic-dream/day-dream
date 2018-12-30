const config = require('../config/dev')
const mongoose = require('mongoose')

mongoose.connect(config.db_pro, { useNewUrlParser: true } )

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected success')
})

mongoose.connection.on('error', (e) => {
  console.log('MongoDB connected fail', e)
})

mongoose.connection.on("disconnected", function () { //监听掉线
  console.log("MongoDB connected disconnected.")
})

module.exports = mongoose