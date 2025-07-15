import React from "react"
import {useState} from "react"

function Add ({todos, setTodo}) {
    const [title, setTitle] = useState("")

    function addTodo() {
        const newTodo = {
            id : Date.now().toString(),
            title : title,
            complete : false
        }

        setTodo(
            [
                ...todos,
                newTodo
            ]
        )
    }

    return (
        //<> React Fragment shorthand
        <>
            <input
                name = "todo-title"
                value = {title}
                placeholder = "Enter a title for todo"
                onChange = {e => setTitle(e.target.value)}
            />

            <span>
                <button
                    onClick = {addTodo}
                >
                    +
                </button>
            </span>
        </>
    )
}
export default Add

//Axel: Max line per file 100