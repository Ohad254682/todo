import React, { Component } from "react";
import { connect } from 'react-redux'
import { loadTodos, removeTodo, toggleIsDone, filterBy } from './actions'


import TodoList from "../cmps/TodoList";
import TodoFilter from "../cmps/TodoFilter";


import {
  Link
} from "react-router-dom";


class TodoApp extends Component {


  componentDidMount() {
    this.props.loadTodos();
    this.TodosToShow()
  }
  onRemove = (todoId) => {
    this.props.removeTodo(todoId);
  }

  toggleIsDone = (todoId) => {
    this.props.toggleIsDone(todoId);
  }
  TodosToShow=(searchTerm = 'ALL')=> {
    this.props.filterBy(searchTerm)
  }
  render() {
    return (
      <section>
        <Link to="/edit">Add Todo</Link>
        <TodoFilter TodosToShow={this.TodosToShow} />
        {this.props.todos &&
          <TodoList
            todos={this.props.todos} onRemove={this.onRemove} history={this.props.history} toggleIsDone={this.props.toggleIsDone}
          />
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    todosToShow:state.todos.todosToShow
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