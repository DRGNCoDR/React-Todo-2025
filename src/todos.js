import React, { useEffect, useState } from "react";

function Todos() {
    const todoComplete ={
        color: "green",
        textDecoration: 'line-through'
    };

    const [todos, setTodo] = useState([])
    const [description, setTitle] = useState('');

    function generateNewID()
    {
        return Date.now().toString(36)
    }

    function getCurrentTodos()
    {
        return [...todos]
    }

    function addTodo()
    {
        const newTodo =
        {
            id : generateNewID(),
            title : description,
            complete : false
        }
        if(description != "")
        {
            setTodo(
                [
                    ...todos,
                    newTodo
                ]
            )
        }
    }

    function completeTodo(id)
    {
        const newTodos = getCurrentTodos()
        newTodos.forEach
        (
            (todo) =>
            {
                if(todo.id == id){
                    todo.complete = !todo.complete
                }
            }
        )
        setTodo(newTodos);
    }

    function deleteTodo(id)
    {
        const currTodos = getCurrentTodos()
        const filteredTodos = currTodos.filter
        (
            (todo) => todo.id !== id
        )
        setTodo(filteredTodos)
    }

    function editTodo(id)
    {
        const newTodos = getCurrentTodos()
        newTodos.forEach
        (
            (todo) =>
            {
                if(todo.id == id){
                    todo.title = description
                }
            }
        )
        setTodo(newTodos);
    }
    function List()
    {
        const todoList = todos.map(
            (todo) =>
            <li key = {todo.id}>
                <input
                    type = "checkbox"
                    checked = {todo.complete}
                    onChange={() => completeTodo(todo.id)}
                />
                <span
                    style =
                    {
                        todo.complete
                            ? todoComplete
                            : {}
                    }
                >
                    {todo.title}
                </span>
                <button
                    onClick={() => editTodo(todo.id) }
                >
                    E
                </button>
                <button
                    onClick={() => deleteTodo(todo.id) }
                >
                    X
                </button>
            </li>
        )
        return (
            <ol>
                {todoList}
            </ol>
        )
    }
    return (
        <div>
            <input
                name = "todo-title"
                value = {description}
                placeholder = "Enter a title for todo"
                onChange = {e => setTitle(e.target.value)}
            />
            <button
                onClick = {addTodo}
            >
                +
            </button>
            <div>
                <List />
            </div>
        </div>
    )
}
export default Todos;