const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const db = require('./models/db')

const jwt = require('koa-jwt')
const checkAuthError = require('./middlewares/checkAuth').checkAuthError
const setUserState = require('./middlewares/checkToken').setUserState

const index = require('./routes/index')
const users = require('./routes/users')
const auth = require('./routes/auth')
const todo = require('./routes/todo')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.context.secret = 'v6UQx8xqUfRTvpfGcWSKCcT4sLMUnjhR4g9ngbW2ZGJdo5pbyxA8aaeawuPsy'
app.use(checkAuthError)
app.use(jwt({ secret: app.context.secret }).unless({ path: [/^\/auth/] }))

// 设置用户
app.use(setUserState)

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(auth.routes(), auth.allowedMethods())
app.use(todo.routes(), todo.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
