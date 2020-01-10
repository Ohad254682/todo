
import React, { Component } from "react";
export default class TodoFilter extends Component {


    render() {
        return <div>
            <button onClick={() => this.props.setFilter('ALL')}>All</button>
            <button onClick={() => this.props.setFilter('DONE')} >Done</button>
            <button onClick={() => this.props.setFilter('ACTIVE')} >Active</button>
        </div>
    }
}