import React, { Component } from "react";
import { connect } from 'react-redux'
import { loadTodos, removeTodo, toggleIsDone, filterBy, setSearchTerm } from './actions'


import TodoList from "../cmps/TodoList";
import TodoFilter from "../cmps/TodoFilter";


import {
  Link
} from "react-router-dom";


class TodoApp extends Component {



  componentDidMount() {
    this.props.loadTodos()

  }
  onRemove = (todoId) => {
    this.props.removeTodo(todoId)
  }

  toggleIsDone = (todoId) => {
    this.props.toggleIsDone(todoId)
  }
  setFilter = (searchTerm) => {
    this.props.setSearchTerm(searchTerm).then(this.props.filterBy);
  }

  TodosToShow = () => {
    this.props.filterBy()
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
    todosToShow: state.todosToShow,
    searchTerm: state.searchTerm
  }
}
const mapDispatchToProps = {
  loadTodos,
  removeTodo,
  toggleIsDone,
  filterBy,
  setSearchTerm
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)