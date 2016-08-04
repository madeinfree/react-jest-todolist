import React, { Component, PropTypes } from 'react'
import Todo from './todo.react'

export default class Todos extends Component {

  static PropTypes = {
    todos: PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  _render_todos() {
    return this.props.todos.map((d, idx) => {
      return (
        <Todo
          key={ idx }
          idx={ idx }
          text={ d.text }
          completed={ d.completed }
          removeTodo={ this.props.removeTodo }/>
      )
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos
  }

  render() {
    return (
      <div>
        <div>Todos List</div>
        { this._render_todos.call(this) }
      </div>
    )
  }
}

Todos.displayName = 'Todos Component'
