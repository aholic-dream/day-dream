import {createStore} from 'redux'
import todoApp from './todo_reducer'

// store 创建数据存储器
const store = createStore(todoApp)

export default store
