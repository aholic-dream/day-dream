import React from 'react'
import PropTypes from 'prop-types'
import {setVisibilityFilter} from '../../model/todo_action'
import {connect} from 'react-redux'

// 通过connect 传入state对象，用于触发 获取状态， ownProps 是外面传进来的属性
const mapStateToProps = (state, ownProps) => {
  // console.log('Link-state:', state)
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
// connect 传入dispatch 方法，用于触发action， ownProps 是外面传进来的属性
const mapDispatchToProps = (dispatch, ownProps) => ({
  // console.log('link-dispatch:', dispatch, ownProps)
  // 通过按钮传入的 filter 来设置过滤类型
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const Link = (state) => {
  let { active, children, onClick } = state
  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px'
      }}
      type="button"
    >
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
// connect 将两个对象合并，也就是传入组件的 state
export default connect(mapStateToProps, mapDispatchToProps)(Link)