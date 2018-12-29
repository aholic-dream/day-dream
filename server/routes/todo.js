const router = require('koa-router')()
const TodoControllers = require('../controllers').Todo

router.prefix('/api/todo')

router.get('/', async (ctx, next) => {
  await TodoControllers.getTodos(ctx, next)
})

router.post('/', async (ctx, next) => {
  await TodoControllers.addTodo(ctx, next)
})

router.put('/', async (ctx, next) => {
  await TodoControllers.updateTodo(ctx, next)
})

router.delete('/', async (ctx, next) => {
  await TodoControllers.deleTodo(ctx, next)
})

module.exports = router