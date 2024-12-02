import React from 'react'

function TodoItem({ item, todoList, setTodoList, keyNumber }) {
  const deleteTodo = () => {
    setTodoList(todoList.filter((todo) => todo.key !== keyNumber));
  }

  return (
    <div className='todo-item'>
      {item}
      <button className='todo-item-delete-button' onClick={deleteTodo}>삭제</button>
    </div>
  )
}

export default TodoItem