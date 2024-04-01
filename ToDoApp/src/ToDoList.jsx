import React, { useState } from "react";
import ToDo from "./ToDo";
import NewToDo from "./NewToDo";

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", checked: true },
        { id: 2, text: "Learn JavaScript", checked: false },
        { id: 3, text: "Learn CSS", checked: false },
    ]);

    const addTodo = (newTodo) => {
        setTodos((todos) => [...todos, {...newTodo, id: Date.now()}]);
    };

    const onChecked = (id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };

    const onDelete = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };

    const onEdit = (id, newText) => {
        setTodos((todos) =>
            todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
        );
    };

    return (
        <div className="todo-list">
            <NewToDo addTodo={addTodo} />
            <ul>
                {todos.map((todo) => (
                    <ToDo
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        checked={todo.checked}
                        onChecked={onChecked}
                        onDelete={() => onDelete(todo.id)}
                        onEdit={onEdit}
                    />
                ))}
            </ul>
        </div>
    );
}
