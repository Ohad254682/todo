import React, { Component } from "react";
import { connect } from 'react-redux'
import { loadTodos, removeTodo, toggleIsDone, filterBy } from './actions'


import TodoList from "../cmps/TodoList";
import TodoFilter from "../cmps/TodoFilter";


import {
  Link
} from "react-router-dom";


class TodoApp extends Component {

  state = {
    searchTerm: 'ALL'
  }


  componentDidMount() {
    this.props.loadTodos().then(() => this.TodosToShow())

  }
  onRemove = (todoId) => {
    this.props.removeTodo(todoId);
  }

  toggleIsDone = (todoId) => {
    this.props.toggleIsDone(todoId);
  }
  setFilter = (searchTerm) => {
    this.setState({ searchTerm }, this.TodosToShow)
  }

  TodosToShow = () => {
    this.props.filterBy(this.state.searchTerm)
  }
  render() {
    return (
      <section>
        <Link to="/edit">Add Todo</Link>
        <TodoFilter setFilter={this.setFilter} />
        {this.props.todosToShow &&
          <TodoList
            todos={this.props.todosToShow} onRemove={this.onRemove} history={this.props.history} toggleIsDone={this.props.toggleIsDone}
          />
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    todosToShow: state.todosToShow
  }
}
const mapDispatchToProps = {
  loadTodos,
  removeTodo,
  toggleIsDone,
  filterBy
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)