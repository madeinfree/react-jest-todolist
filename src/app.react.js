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

    this.addTodos = (text, completed) => this.addTodo(text, completed)
    this.removeTodo = (idx) => this.removeTodo(idx)
  }

  addTodo({text, completed}) {
    this.setState({
      todos: this.state.todos.concat({ text: text, completed: completed })
    })
  }

  removeTodo(idx) {
    const todos = this.state.todos.filter((todo, index) => {
      return index !== idx
    })
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div>
        <h1>React Todo List Test By Jest</h1>
        <Todos
          todos={ this.state.todos }
          removeTodo={ this.removeTodo }/>
        <button onClick={ ({text, completed}) => this.addTodos({text, completed}) }>Add Todo</button>
      </div>
    )
  }
}
