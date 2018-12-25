import { createStore } from 'redux'
import todoApp from './reducers'
// createStore 第二个参数可选 传入初始状态

let store = createStore(todoApp)