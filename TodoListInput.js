import React from 'react'

const TodoListInput = ({ inputValue, setInputValue }) => {
  return (
    <input className='todoList-input' placeholder='추가할 일정을 입력하세요' value={inputValue} type="text" onChange={(event) => setInputValue(event.target.value)}></input>
  )
}

export default TodoListInput