const mongoose = require('mongoose')
const keys = require('../config')

const URI = keys.mlabURI
const options = { useMongoClient: true }
const callback = err => {
  if (err) return new Error(err)
  console.log('SERVER CONNECTED TO MLAB')
}

mongoose.connect(
  URI,
  options,
  callback
)
mongoose.Promise = global.Promise
mongoose.set('debug', true)
