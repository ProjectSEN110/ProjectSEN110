import React from "react";
import './TodoItem.css';

function TodoItem({todo, onDelete}){
    return(
        <li className="todo-item">
            <span>{todo}</span>
            <button onClick={onDelete} className="delete-btn">Delete</button>
        </li>
    );
}
export default TodoItem;