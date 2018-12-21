const b = require('bcryptjs')

exports.validateId = function (str) {
  return (/^[a-zA-Z0-9\-_]+$/i).test(str);
}

exports.bhash = function (str, cb) {
  b.hash(str, 10, cb)
}

exports.bcompare = function (str, hash, cb) {
  b.compare(str, hash, cb)
}

