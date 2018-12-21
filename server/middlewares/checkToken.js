const jsonwebtoken = require('jsonwebtoken')
const User = require('../proxy').User
const Decorator = require('../common/decorator').responseDecorator

async function verifyToken(ctx, token) {
  try {
    let decoded = jsonwebtoken.verify(token, ctx.secret)
    if (decoded.exp > Math.floor(Date.now() / 1000)) {
      return decoded
    } else {
      ctx.throw(401)
    }
  } catch (err) {
    ctx.throw(401)
  }
}


let checkAuthHeader = function(ctx, next) {
  if (!ctx.header || !ctx.header.authorization) {
    return
  }
  const parts = ctx.header.authorization.split(' ')
  if (parts.length === 2) {
    const schema = parts[0]
    const credentials = parts[1]

    if (/^Bearer$/i.test(schema)) {
      return credentials
    }
  }
}

exports.setUserState = async function (ctx, next) {
  let credentials = checkAuthHeader(ctx, next)
  if (credentials) {
    let decoded = verifyToken(ctx, credentials)
    await decoded.then(info => {
      ctx.state.user = info.name
      ctx.state.user_id = info._id
    })
    let user = await User.getUserByName(ctx.state.user)
    if (user[0].accessToken !== credentials) {
      ctx.status = 401
      ctx.body = Decorator({
        err: 'Authorization Error',
        message: 'Token过期'
      })
      return
    }

  }
  return next()
}
