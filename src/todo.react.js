import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {

  static propTypes = {
    removeTodo: PropTypes.func
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {
      idx,
      text,
      completed,
      removeTodo
    } = this.props

    return (
      <div>
        <div>Do { text }</div>
        <div>Is { completed ? 'completed' : 'not completed' }</div>
        <button onClick={ () => removeTodo(idx) }>Remove Todo</button>
      </div>
    )
  }
}

Todo.displayName = 'Todo Component'
