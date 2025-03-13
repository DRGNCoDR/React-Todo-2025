import React, { useEffect, useState } from "react";

import Add from "./comp/add"
import List from "./comp/list"

function Todos() {
    const [todos, setTodo] = useState({})
    
    return (
        <div>
            <h1>Todos</h1>
            <Add />
            <List />
        </div>
    )
}
export default Todos;