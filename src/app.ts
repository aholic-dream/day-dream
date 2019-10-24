import * as Koa from 'koa'
import User from './router/user'
import pageNotFoundrouter from './router/pageNotFound'
const logger = require('koa-logger')
const app = new Koa()
const body = require('koa-better-body')

app.use(logger())
app.use(body())
// 路由
app.use(User.routes())
app.use(User.allowedMethods())
app.use(pageNotFoundrouter.routes())
app.use(pageNotFoundrouter.allowedMethods())

app.listen(3000)

console.log('Server running on port 3000')
