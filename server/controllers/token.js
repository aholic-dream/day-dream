const jsonwebtoken = require('jsonwebtoken')
const Decorator = require('../common/decorator').responseDecorator

exports.verifyToken = async function (ctx, token) {
  try {
    let decoded = jsonwebtoken.verify(token, ctx.secret)
    if (decoded && decoded.exp > Math.floor(Date.now() / 1000)) {
      return decoded
    } else {
      ctx.status = 401
      ctx.body = Decorator({
        err: 'Authorization Error',
        message: 'Token 无效'
      })
    }
  } catch (err) {
    ctx.status = 401
    ctx.body = Decorator({
      err: err.toString(),
      message: 'Token 无效'
    })
  }
}