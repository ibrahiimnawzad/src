import { useState, useEffect } from 'react';
import './App.css';
import Input from './Projects/ToDoList/Input';
import ToDoList from './Projects/ToDoList/ToDoList';

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')


  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodos(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }
  
  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todoItem, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList )
  }

  useEffect(() => {
    if(!localStorage){
      return 
    }
    
    let localTodos = localStorage.getItem('todos')

    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos )

  }, [])

  return (
    <div>
      <Input handleAddTodos={handleAddTodos} setTodoValue={setTodoValue} todoValue={todoValue}/>
      <ToDoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos} />
    </div>
  );
}

export default App;