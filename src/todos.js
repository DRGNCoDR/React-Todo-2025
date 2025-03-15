import React, { useEffect, useState } from "react";

import Add from "./comp/add"
import List from "./comp/list"

function Todos() {
    return (
        <div>
            <h1>Todos</h1>
            <Add />
        </div>
    )
}
export default Todos;