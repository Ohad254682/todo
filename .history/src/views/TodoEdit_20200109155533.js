import React, { Component } from "react";
import { connect } from 'react-redux'

import TodoService from '../services/TodosService.js'

class TodoEdit extends Component {
    state = {
        todo: {content:''}
    }

    componentDidMount() {
        const todoId = this.props.match.params.id;
        if (!todoId) return;
        const todo = TodoService.get(todoId)
        this.setState({todo})
    }

    saveTodo = (ev) =>{
        ev.preventDefault();
        const addedTodo = TodoService.save(this.state.todo)
        this.props.saveTodo(addedTodo);
        this.props.history.push('/');
    }

    handleChange = ev => {
        const key = ev.target.name
        const val = ev.target.value
        const todo = {...this.state.todo}
        todo[key] = val 
        this.setState({todo})
    }
    render() {
        let {content} = this.state.todo
        return (
            <section>
                <h1>Todo Edit</h1>
                <form onSubmit={this.saveTodo} >
                    <div>
                        <label >Content:</label>
                        <input onChange={this.handleChange} value={content} name="content" type="text" />
                    </div>
                    <button>Save</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveTodo: (todo) => {
            dispatch({type: 'TODO_SAVE', todo})
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoEdit)