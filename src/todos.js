import React, { useEffect, useState } from "react";

function Todos() {
    const [todos, setTodo] = useState([])
    const [description, setTitle] = useState('');

    function addTodo()
    {
        if(description != "")
        {
            const newTodo =
            {
                id : Date.now(),
                title : description,
                complete : false //TODO: passed in value
            }
            setTodo(
                [
                    ...todos,
                    newTodo
                ]
            )
        }
    }
    function completeTodo(){

    }
    function List(){
        const todoList = todos.map((todo) =>
            <li key = {todo.id}>
                <input
                    type = "checkbox"
                    value = {todo.complete}
                    checked = {todo.complete}
                    onChange = {completeTodo}
                />
                {todo.title}
                {/* <button onClick={}>X</button> */}
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
                <List/>
            </div>
        </div>
    )
}
export default Todos;