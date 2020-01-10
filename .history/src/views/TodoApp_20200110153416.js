import React, { Component } from "react";
import { connect } from 'react-redux'
import { loadTodos, removeTodo,toggleIsDone, filterBy } from './actions'


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

  toggleIsDone=(todoId)=>{
    this.props.toggleIsDone(todoId);
  }
  get TodosToShow(filter='') {
    if (!filter) return this.props.todos;
    return this.props.filterBy(this.state.searchTerm)
  }
  render() {
    return (
      <section>
        <Link to="/edit">Add Todo</Link>
        <TodoFilter onFilter={this.setFilter} />
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
    // todosFiltered: state.todosFiltered
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