import React from "react";

export default function TodoPreview({ todo }) {
    return (
        <section>
            <h5 className={todo.isDone ? 'done' : ''}>{todo.content}</h5>
        </section>
    )


}