import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className='todo-list'>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        className='todo-input'
      />
      <button onClick={handleAddTodo} className='add-todo-btn'>Add Todo</button>
      <ul className='todo-items'>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onDelete={() => handleDeleteTodo(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;