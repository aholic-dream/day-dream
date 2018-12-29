const TodoModel = require('../models/schema/todo')

exports.deleteTodo = function (id, cb) {
  const query = {_id: id}
  return TodoModel.findOneAndUpdate(query, {status: false}, cb)
}

exports.newAndSave = function (content, user_name, completed, status) {
  let todo = new TodoModel()
  todo.content = content
  todo.user_name = user_name
  todo.completed = completed
  todo.status = status || true
  return todo.save()
}

exports.getTodo = function (id, cb) {
  return TodoModel.findById(id, cb)
}

exports.getTodoList = function (user_name) {
  const query = {user_name: user_name, status: true}
  return TodoModel.find(query, null)
}


