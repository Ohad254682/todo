
import React, { Component } from "react";
export default class TodoFilter extends Component {


    render() {
        return <div>
            <button onClick={() => this.props.TodosToShow('ALL')}>All</button>
            <button onClick={() => this.props.TodosToShow('DONE')} >Done</button>
            <button onClick={() => this.props.TodosToShow('ACTIVE')} >Active</button>
        </div>
    }
}