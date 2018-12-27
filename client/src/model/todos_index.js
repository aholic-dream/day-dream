import {createStore} from 'redux'
import todoApp from './todo_reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

// store 创建数据存储器
const store = createStore(todoApp, composeWithDevTools())

export default store
