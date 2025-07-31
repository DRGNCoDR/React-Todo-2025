import React, {useState} from "react"
import Add from "./comp/add"
import List from "./comp/list"

function Todos() {
    const border1 = {
        border : "1px solid black"
    }
    const border2 = {
        border : "2px dotted black"
    }

    const pad5 = {
        padding : "5px"
    }

    const margin5 = {
        margin : "5px"
    }

    const [todos, setTodo] = useState([])

    return (
        <div style = {border1}>
            <div
                style = {
                    {
                        ...border1,
                        ...pad5,
                        ...margin5
                    }
                }
            >
                <Add
                    todos = {todos}
                    setTodo = {setTodo}
                />
            </div>

            <div
                style = {
                    {
                        ...border2,
                        ...pad5,
                        ...margin5
                    }
                }
            >
                <List
                    todos = {todos}
                />
            </div>
        </div>
    )
}

export default Todos
//Axel: Max line per file 100