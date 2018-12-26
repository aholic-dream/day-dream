import { createStore } from 'redux'
// createStore 第二个参数可选 传入初始状态
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  ADD_TODO,
  TOGGLE_TODO,
} from './action.js'

// state 设计 
//          0.所有的 state 都被保存在一个单一对象中 
//          1.建议你尽可能地把 state 范式化，不存在嵌套
//          3.每个数据以 ID 为主键，不同实体或列表间通过 ID 相互引用数据
const initialState = {
  todos:[
    {
      id:1,text:'add todo',completed:false
    },{
      id:2,text:'add todo1',completed:false
    },{
      id:3,text:'add todo2',completed:false
    }
  ]
}

// reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
//1.不要修改 state。 使用 Object.assign() 新建了一个副本,也可以开启对 ES7 提案对象展开运算符的支持, 从而使用 { ...state, ...newState } 达到相同的目的。

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state, 
        {
          id:action.id,
          text: action.text,
          completed: false
        }
      ]
    }
      break;
    case TOGGLE_TODO: {
      let nextState = Object.assign({},state);
      state.todos.map(todo =>{
        (todo.id === action.id)
          ?{...todo,complete : !todo.complete}
          :todo
      })
      return nextState
    }
      break;
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools());

export default store