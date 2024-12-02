import React from 'react'
import TodoItem from './TodoItem'

function TodoListBox({ todoList, setTodoList }) {
  return (
    <div className='todoList-box'>
      <div className='sidebar-title'>Todo-List</div>
      {todoList.map((todo) => <TodoItem item={todo.value} todoList={todoList} setTodoList={setTodoList} keyNumber={todo.key}></TodoItem>)}
    </div>
  )
}

export default TodoListBox