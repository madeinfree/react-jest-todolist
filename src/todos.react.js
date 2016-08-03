import React, { Component } from 'react'
import Todo from './todo.react'

export default class Todos extends Component {
  render() {
    const {
      todos
    } = this.props

    const render_todo = (
      todos.map((d, idx) => {
        return (
          <Todo
            key={ idx }
            text={ d.text }
            completed={ d.completed } />
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
