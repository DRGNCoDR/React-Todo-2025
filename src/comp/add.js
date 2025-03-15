import React, { use, useState } from "react";
import List from "./list"
function Add () {    
    const [todos, setTodos] = useState([])
    const [todoInput, setTodoInput] = useState("")

    return (
        <div>
            <div>
                <input
                    type="text"
                    onChange={(e) => {setTodoInput(e.target.value)}}
                    value={todoInput}
                />
                <button onClick= { () => {
                        setTodos(
                            prev => [
                                ...prev,
                                {
                                    title: todoInput,
                                    completed:false
                                }
                            ]
                        )
                    }}
                >
                    + Add Todo
                </button>
            </div>
            <List {...todos}/>
        </div>
    )
}
export default Add