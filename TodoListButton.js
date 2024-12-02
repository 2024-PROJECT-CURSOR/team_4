import React from 'react'

const TodoListButton = ({addItem}) => {
  return (
    <button className='todoList-button' onClick={addItem}>입력</button>
  )
}

export default TodoListButton