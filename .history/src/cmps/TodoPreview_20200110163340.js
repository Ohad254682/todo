import React from "react";

export default function TodoPreview() {
    return (
        <section>
            <h5 onClick={()=>{this.props.toggleIsDone(todo._id)}} className={todo.isDone ? 'isdone' : ''}> {todo.content}</h5>
        </section >
    )


}