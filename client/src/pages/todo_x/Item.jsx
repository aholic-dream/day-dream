import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../components/UI/Card/Card.jsx'
import { connect } from 'react-redux'
import { deleTodo, getVisibleTodos, toggleTodo } from '@m/todo_action'
import { Button } from '@c/UI/Button/index'
import {Row, Col} from '@c/UI/grid/index'

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})
const mapDispatchToProps = dispatch => ({
  deleTodo: id => dispatch(deleTodo(id)),
  toggleTodo: id => dispatch(toggleTodo(id))
})

const TodoItem = ({ index, completed, id, text, deleTodo, toggleTodo }) => (
  <Card
    id={index + 1}
    extra={<a href='#'>Time: 2018-01-03</a>}
    style={{
      textDecoration: completed ? 'line-through' : '',
      margin: '1rem .5rem 0'
    }}
  >
    <div>{text}</div>
    <div style={{ marginTop: '1rem' }}>
    <Row gutter={24}>
      <Col span={12}>
        <Button color='red' onClick={() => deleTodo(id)}>
          删除
        </Button>
      </Col>
      <Col span={12}>
        <Button
          color='green'
          style={{ marginLeft: '1rem' }}
          onClick={() => toggleTodo(id)}>
          {completed ? '未完成' : '完成'}
        </Button>
      </Col>
    </Row>
    </div>
  </Card>
)

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem)
