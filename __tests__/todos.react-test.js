import React from 'react'
import { shallow, mount } from 'enzyme'

import Todos from '../src/todos.react'
import Todo from '../src/todo.react'

jest
  .unmock('../src/todos.react')
  .unmock('../src/todo.react')

const custom_todos = [
  {
    text: 'foo',
    completed: false
  },
  {
    text: 'bar',
    completed: true
  }
]

describe('<Todos />', () => {
  it('render <Todos />', () => {
    const wrapper = shallow(<Todos todos={ custom_todos }/>)
    expect(wrapper.find(Todo).length).toBe(2)
  })

  it('can call removeTodo method', () => {
    const mock_removeTodo = jest.fn().mockImplementation((idx) => {
      const todos = custom_todos.filter((todo, index) => {
        return idx !== index
      })
      wrapper.setProps({ todos: todos })
    })
    const wrapper = mount(<Todos todos={ custom_todos } removeTodo={ mock_removeTodo } />)
    wrapper.find(Todo).at(0).find('button').simulate('click')
    expect(wrapper.find(Todo).length).toBe(1)
  })
})
