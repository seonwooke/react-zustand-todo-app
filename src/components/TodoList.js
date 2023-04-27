import React, { useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';

const TodoList = () => {
    const [todoValue, setTodoValue] = useState("");
    const {todos, addTodo, deleteTodo, completedTodo} = useTodoStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todoValue);
        setTodoValue("");
    }

    return (
        <div>
            <h3>Todo App</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="new_todo"
                    name="newTodo"
                    value={todoValue}
                    onChange={(e) => setTodoValue(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.isCompleted ? "line-through" : "unset" }}>
                            {todo.text}{" "}
                        </span>
                        {!todo.isCompleted ? (<button onClick={() => completedTodo(todo.id)}>✅</button>) : null}
                        <button onClick={() => deleteTodo(todo.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;