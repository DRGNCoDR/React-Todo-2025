import React, {useState} from "react"
import Add from "./comp/add"
import List from "./comp/list"

function Todos() {
    const container = {
        border : "1px solid black",
        margin : "2px"
    }

    const pad5 = {
        padding : "2px"
    }

    const [todos, setTodo] = useState([])

    return (
        <div style = {container}>
            <div 
                style = {{...container, ...pad5}}
            >
                <Add
                    todos = {todos}
                    setTodo = {setTodo}
                />
            </div>

            <div 
                style = {{...container, ...pad5}}
            >
                <List todos = {todos}/>
            </div>
        </div>
    )
}

export default Todos
//Axel: Max line per file 100
