import React from "react";
import { withRouter } from "react-router";
import TodoPreview from "./TodoPreview";

function TodoList(props) {
    return (
        <section className="CarList-container">
            <h1>Todo</h1>
            <ul>
                {props.todos.map(todo => (
                    <li key={todo._id}>
                        <TodoPreview onClick={()=>{props.toggleIsDone(todo._id)}} todo={todo} />
                    < button onClick = {() => props.onRemove(todo._id)}>Delete</button>
            <button onClick={() => props.history.push(`/edit/${todo._id}`)}>Edit</button>
                    </li>

    ))
}
            </ul >

        </section >
    )


}

export default withRouter(TodoList)