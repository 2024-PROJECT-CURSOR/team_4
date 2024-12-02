import React from 'react'
import { useState } from 'react';
import Background from '../component/Background';
import Sidebar from '../component/Sidebar';
import Title from '../component/Title';
import TodoListBox from '../component/TodoListBox';
import TodoListButton from '../component/TodoListButton';
import TodoListInput from '../component/TodoListInput';
import UserProfileBox from '../component/UserProfileBox';
import AddButton from '../component/AddButton';

const TodoListPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const addItem = () => {
        setTodoList([...todoList, { key: keyNumber, value: inputValue }]);
        setKeyNumber(keyNumber + 1);
        setInputValue('');
    }
    const [keyNumber, setKeyNumber] = useState(0);

    return (
        <div>
            <Background>
                <Title></Title>
                <UserProfileBox></UserProfileBox>
                <div style={{ display: 'flex' }}>
                    <Sidebar></Sidebar>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <TodoListInput inputValue={inputValue} setInputValue={setInputValue}></TodoListInput>
                            <TodoListButton addItem={addItem}></TodoListButton>
                        </div>
                        <TodoListBox todoList={todoList} setTodoList={setTodoList}></TodoListBox>
                    </div>
                </div>
                <AddButton name="새 리스트 추가"></AddButton>
            </Background>
        </div>
    )
}

export default TodoListPage