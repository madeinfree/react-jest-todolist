import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    const {
      text,
      completed
    } = this.props

    return (
      <div>
        <div>`Do ${text}`</div>
        <div>`Is ${completed}`</div>
      </div>
    )
  }
}
