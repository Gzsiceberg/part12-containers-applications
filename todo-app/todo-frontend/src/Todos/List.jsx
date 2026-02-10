import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map(todo => (
        <React.Fragment key={todo._id || todo.text}>
          <hr />
          <Todo
            todo={todo}
            onDelete={onClickDelete(todo)}
            onComplete={onClickComplete(todo)}
          />
        </React.Fragment>
      ))}
    </>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default TodoList
