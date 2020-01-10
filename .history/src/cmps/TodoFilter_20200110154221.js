
import React, { Component } from "react";
class TodoFilter extends Component {


    render() {
        return <div>
            <button onClick={() => this.props.TodosToShow('')}>All</button>
            <button onClick={() => this.props.TodosToShow('DONE') > Done</button>
            <button onClick={() => this.props.TodosToShow('ACTIVE') > Active</button>
            </div>
    }
}