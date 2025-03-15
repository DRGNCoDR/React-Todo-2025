import React from "react";

function List (todos) {    
    console.log({todos})
    return(
        <>
            <h1>React Todos (List)</h1>
            <ul>
                {
                    
                    // todos.map((todo,index) => {
                    //     return (
                    //         <li key={index}>
                    //             {todo}
                    //         </li>
                    //     )
                    // })
                }
            </ul>
        </>
    )
}
export default List