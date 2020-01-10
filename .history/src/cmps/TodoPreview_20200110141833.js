import React from "react";

export default function TodoPreview({ todo }) {
    return (
        <section>
            <h5 className={todo.isDone ? style = {{ textDecoration: line-through} : ''}>{todo.content}</h5>
        </section >
    )


}