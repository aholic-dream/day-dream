import * as Koa from 'koa'
import router from './router'
const logger = require('koa-logger')
const KoaBody = require('koa-better-body')
const app = new Koa()

app.use(logger())
app.use(router.routes()) /*启动路由*/
app.use(router.allowedMethods())
app.listen(3000)

console.log('Server running on port 3000')
