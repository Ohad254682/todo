import React, { Component } from "react";
import { connect } from 'react-redux'
import {loadTodos,removeTodo} from './actions'


import TodoList from "../cmps/TodoList";
// import TodoFilter from "../cmps/TodoFilter";
import TodosService from '../services/TodosService'

import {
  Link
} from "react-router-dom";


class TodoApp extends Component {

  componentDidMount() {
    this.props.loadTodos();
  }
  onRemove = (todoId) => {
    TodosService.remove(todoId)
    this.props.removeTodo(todoId);
  }
  // setFilter = (filterBy) => {
  //   this.setState({ filterBy })
  // }
  // get carsToShow() {
  //   if (!this.state.filterBy.txt) return this.props.cars;
  //   return this.props.cars.filter(car => car.vendor.includes(this.state.filterBy.txt))
  // }
  render() {
    return (
      <section>
        <Link to="/edit">Add Todo</Link>
        {/* <CarFilter onFilter={this.setFilter} /> */}
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
    todos: state.todos
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