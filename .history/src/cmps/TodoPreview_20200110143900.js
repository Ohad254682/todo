import React from "react";

export default function TodoPreview({ todo,toggleIsDone }) {
    return (
        <section>
            <h5 onClick={()=>{props.toggleIsDone(todo._id)}} className={todo.isDone ? 'isdone' : ''}> {todo.content}</h5>
        </section >
    )


}