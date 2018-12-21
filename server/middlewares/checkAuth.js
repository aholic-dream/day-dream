


exports.checkAuthError = function(ctx, next){
  return next().catch((err) => {
    console.log(err)
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = {
        message: 'Protected resource, use Authorization header to get access\n',
        err: 'Authorization Error'
      }
    } else {
      throw err
    }
  })
}

