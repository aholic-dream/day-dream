/*
 * action 类型
 *action ｛type:'*****',param1:'131'...｝,除了 type 字段外,action 对象的结构完全由你自己决定
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'


/*
 * action 创建函数
 * action 创建函数 生成普通的js对象；也就只是简单的返回一个 action对象
 */


export function addTodo (text){
  return {
    type: ADD_TODO,
    text,
    id
  }
}

export function toggleTodo (index){
  return {
    type: TOGGLE_TODO,
    index
  }
}
