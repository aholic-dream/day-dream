const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 't测试'
})

router.post('/', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
