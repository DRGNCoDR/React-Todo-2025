import React from "react"
import {createRoot} from "react-dom/client"
import Todos from "./todos"

const domNode = document.getElementById("root")
const root = createRoot(domNode)

function App() {
    return (
        <>
            <h1>React Todo App</h1>
            <Todos />
        </>
    )
}

export default App

root.render(<App />)