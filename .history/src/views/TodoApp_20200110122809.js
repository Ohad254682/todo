import React, { Component } from "react";
import { connect } from 'react-redux'
import { loadTodos, removeTodo } from './actions'


import TodoList from "../cmps/TodoList";
import TodoFilter from "../cmps/TodoFilter";


import {
  Link
} from "react-router-dom";


class TodoApp extends Component {

  componentDidMount() {
    this.props.loadTodos();
  }
  onRemove = (todoId) => {
    this.props.removeTodo(todoId);
  }
  setFilter = (filterBy) => {
    this.setState({ filterBy })
  }
  get carsToShow() {
    if (!this.state.todosFiltered) return this.props.todos;
    return this.props.filterBy()
  }
  render() {
    return (
      <section>
        <Link to="/edit">Add Todo</Link>
        <TododFilter onFilter={this.setFilter} />
        {this.props.todos &&
          <TodoList
            todos={this.props.todos} onRemove={this.onRemove} history={this.props.history}
          />
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    todosFiltered: state.todosFiltered
  }
}
const mapDispatchToProps = {
  loadTodos,
  removeTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)