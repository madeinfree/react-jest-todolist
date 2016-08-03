import React, { Component } from 'react'
import Todo from './todo.react'

export default class Todos extends Component {
  render() {
    const {
      todos,
      removeTodo
    } = this.props

    const render_todo = (
      todos.map((d, idx) => {
        return (
          <Todo
            key={ idx }
            idx={ idx }
            text={ d.text }
            completed={ d.completed }
            removeTodo={ removeTodo }/>
        )
      })
    )

    return (
      <div>
        <div>Todos List</div>
        { render_todo }
      </div>
    )
  }
}

Todos.displayName = 'Todos Component'
