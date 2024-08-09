import React, { useState } from 'react'

export default function Input(props) {
    const {handleAddTodos,todoValue, setTodoValue } = props 

    const addTask = (e) => {
        e.preventDefault()
        handleAddTodos(todoValue)
        setTodoValue('')
    }

return (
    <header>
        <form action="">
            <input onSubmit={addTask} value={todoValue} onChange={(e) => {setTodoValue(e.target.value)}} placeholder='Add Task'/>
            <button disabled={todoValue === '' ? true : false} onClick={addTask}>Add</button>
        </form>
    </header>
)
}
