import React from "react"

function List({todos}) {
    const todoList = todos.map(
        (todo) =>
            <li
                key = {todo.id}
            >
                {todo.title}
            </li>
    )

    return (
        <>
            <ol>
                {todoList}
            </ol>
        </>
    )
}

export default List
//Axel: Max line per file 100