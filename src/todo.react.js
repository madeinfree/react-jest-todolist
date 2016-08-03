import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    const {
      idx,
      text,
      completed,
      removeTodo
    } = this.props

    return (
      <div>
        <div>`Do ${text}`</div>
        <div>`Is ${completed}`</div>
        <button onClick={ (idx) => removeTodo(idx) }>Remove Todo</button>
      </div>
    )
  }
}

Todo.displayName = 'Todo Component'
