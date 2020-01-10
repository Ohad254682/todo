import React from "react";

export default function TodoPreview() {
    return (
        <section>
            <h5 onClick={()=>{this.props.toggleIsDone(this.props.todo._id)}} className={this.props.todo.isDone ? 'isdone' : ''}> {this.props.todo.content}</h5>
        </section >
    )


}