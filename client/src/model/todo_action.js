import * as Types from './todo_types'
// id 计数器
let nextTodoId = 0
// 添加todo
export const addTodo = text => ({
  type: Types.ADD_TODO,
  id: nextTodoId++,
  text
})
// 改变tudo的类容
export const changeTodoContext = ({ text, id }) => ({
  type: Types.CHANGE_CONTENT_TODO,
  id,
  text
})
// 改变todo的状态
export const toggleTodo = id => ({
  type: Types.TOGGLE_TODO,
  id
})
// 删除操作
export const deleTodo = id => ({
  type: Types.DELE_TODO,
  id
})


// 设置当前显示类型
export const setVisibilityFilter = (filter) => ({
  filter,
  type: Types.SET_VISIBILITY_FILTER
})

// 判断当前显示的类型， 返回对应的结果
export function getVisibleTodos (todos, filter) {
  switch (filter) {
    case Types.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed) // 过滤

    case Types.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed) // 过滤

    case Types.SHOW_ALL: // 返回所有的todos
    default:
      // console.log(todos)
      return todos
  }
}