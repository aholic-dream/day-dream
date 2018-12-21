const router = require('koa-router')()
const UserController = require('../controllers').User

/**
 * @param NoToken
 * */

 router.prefix('/auth')

/**
 * 登录
 * @param loginname
 * @param pass
 * */
router.post('/signin', async (ctx, next) => {
  await UserController.signin(ctx, next)
})

/**
 * 注册
 * @param loginname
 * @param pass
 * @param rePass
 * @param email
 * */
router.post('/signup', async (ctx, next) => {
  await UserController.signup(ctx, next)
})

module.exports = router