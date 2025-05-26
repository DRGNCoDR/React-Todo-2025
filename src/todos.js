import React, { useEffect, useState } from "react";

function Todos() {
    const [todos, setTodo] = useState([{}])
    const [description, setTitle] = useState('');

    function addTodo(){
        if(description != ""){
            const todo = {
                title : description,
                complete : false
            }
            setTodo(
                [
                    ...todos,
                    {
                        title : description,
                        complete: false
                    }
                ]
            )
            //console.log(todos)
        }
    }
    return (
        <div>
            <input
                name="todo-title"
                value={description}
                placeholder="Enter a title for todo"
                onChange={e => setTitle(e.target.value)}
            />
            <button
                onClick={addTodo}
            >
                +
            </button>
        </div>
    )
}
export default Todos;