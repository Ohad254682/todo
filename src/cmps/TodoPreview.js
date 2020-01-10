import React from "react";

export default function TodoPreview(props) {
    return (
        <section>
            <h5 onClick={()=>{props.toggleIsDone(props.todo._id)}} className={props.todo.isDone ? 'isdone' : ''}> {props.todo.content}</h5>
        </section >
    )


}