import React, { Component } from 'react'
import Todos from './todos.react'

const data = [
  {
    text: 'eat',
    completed: false
  },
  {
    text: 'run',
    completed: true
  },
  {
    text: 'sleep',
    completed: true
  }
]

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: data
    }
  }
  render() {
    return (
      <div>
        <h1>React Todo List Test By Jest</h1>
        <Todos
          todos={ this.state.todos }/>
      </div>
    )
  }
}
