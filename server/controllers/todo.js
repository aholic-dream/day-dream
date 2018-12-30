let TodoProxy = require('../proxy').Todo
let Decorator = require('../common/decorator').responseDecorator

exports.getTodos = async function (ctx, next) {
  let todos = await TodoProxy.getTodoList(ctx.state.user)
  ctx.body = Decorator({
    message: '成功',
    data: {
      list: todos,
      total: todos.length
    }
  })
}

exports.addTodo = async function (ctx, next) {
  let {
    content,
    completed
  } = JSON.parse(ctx.request.body)

  if ([content, completed].some(item => {
    return item === undefined || item === ''
  })) {
    ctx.body = Decorator({
      message: '字段不全',
      err: 'Prop Invalid'
    })
    return
  }
  
  await TodoProxy.newAndSave(content, ctx.state.user, completed).then(result => {
    ctx.body = Decorator({
      message: '保存成功',
      data: result
    })
  }).catch(e => {
    ctx.body = Decorator({
      message: '保存失败',
      err: e.toString()
    })
  })
}

exports.updateTodo = async function (ctx, next) {

}

exports.deleTodo = async function (ctx, next) {
  let {id} = JSON.parse(ctx.request.body)

  await TodoProxy.getTodo(id, async (err, todo) => {
    if (err) {
      return next(err)
    }
    if (!todo) {
      ctx.body = Decorator({
        message: '文档不存在'
      })
      return
    }
    if (!todo.status) {
      ctx.body = Decorator({
        message: '文档已经删除'
      })
      return
    }

    await TodoProxy.deleteTodo(id, async (err, todo) => {
      if(err) {
        return next(err)
      }
      ctx.body = Decorator({
        message: '删除成功'
      })
    })
  })
}


