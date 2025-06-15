import React, { useEffect, useState } from "react";

function Todos() {
    //Styling
    const todoComplete ={
        color: "green",
        textDecoration: 'line-through'
    };

    //Hooks
    const [todos, setTodo] = useState([])
    const [description, setTitle] = useState('');

    //Logic functions
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
    function saveTodos()
    {
        const todos = getCurrentTodos()
        localStorage.setItem("Todos", JSON.stringify(todos))
    }
    function loadTodos()
    {
        const todos = JSON.parse(localStorage.getItem("Todos"))
        setTodo(todos)
    }

    //Button Components
    function AddButton()
    {
        return (
            <span>
                <button
                    onClick = {addTodo}
                >
                    +
                </button>
            </span>
        )
    }
    function EditButton({id})
    {
        return (
            <span>
                <button
                    onClick={() => editTodo(id) }
                >
                    E
                </button>
            </span>
        )
    }
    function DeleteButton({id})
    {
        return (
            <span>
                <button
                    onClick={() => deleteTodo(id) }
                >
                    X
                </button>
            </span>
        )
    }
    function SaveButton()
    {
        return (
            <span>
                <button
                    onClick={() => saveTodos() }
                >
                    Save Current Todos
                </button>
            </span>
        )
    }
    function LoadButton()
    {
        return (
            <span>
                <button
                    onClick={() => loadTodos() }
                >
                    Load Todos
                </button>
            </span>
        )
    }
    function CompleteCheckbox({id, complete})
    {
        return(
            <input
                type = "checkbox"
                checked = {complete}
                onChange = {() => completeTodo(id)}
            />
        )
    }

    //View/Display Components
    function TodoTitle({complete, title})
    {
        return(
            <span
                style =
                {
                    complete
                        ? todoComplete
                        : {}
                }
            >
                {title}
            </span>
        )
    }
    function List()
    {
        const todoList = todos.map(
            (todo) =>
            <li key = {todo.id}>
                <CompleteCheckbox  complete = {todo.complete} id = {todo.id}/>
                <TodoTitle complete = {todo.complete} title = {todo.title}/>
                <EditButton id = {todo.id} />
                <DeleteButton id = {todo.id}/>
            </li>
        )
        return (
            <ol>
                {todoList}
            </ol>
        )
    }
    function PercentageDisplay()
    {
        let totalTodos = todos.length
        let completeCount = 0
        let percentage = 0

        todos.forEach(todo => {
            if(todo.complete){
                completeCount += 1
            }
        });

        percentage = Math.floor(
            (completeCount / totalTodos) * 100
        )

        return(
            <p>
                {completeCount} of {totalTodos} completed
                    (
                        {
                            completeCount > 0
                            ? percentage
                            : 0
                        }
                        %
                    )
            </p>
        )
    }

    //Main return for Todos
    return (
        <div>
            <div>
                <SaveButton />
                <LoadButton />
            </div>
            <div>
                <input
                    name = "todo-title"
                    value = {description}
                    placeholder = "Enter a title for todo"
                    onChange = {e => setTitle(e.target.value)}
                />
                <AddButton />
            </div>
            <div>
                <PercentageDisplay />
                <List/>
            </div>
        </div>
    )
}
export default Todos;