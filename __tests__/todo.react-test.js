import React from 'react'
import { shallow } from 'enzyme'

import Todo from '../src/todo.react'

jest
  .unmock('../src/todo.react')

const custom_todos = {
  idx: 0,
  text: 'foo',
  completed: false,
  removeTodo: jest.fn()
}

describe('<Todo />', () => {
  it('render Todo component', () => {
    const wrapper = shallow(<Todo />)
    expect(wrapper.type()).toBe('div')
    expect(wrapper.childAt(0).text()).toBe('Do ')
  })

  it('set Todo props than get text and completed', () => {
    const wrapper = shallow(<Todo />)
    wrapper.setProps(custom_todos)
    expect(wrapper.childAt(0).text()).toBe('Do foo')
    expect(wrapper.childAt(1).text()).toBe('Is not completed')
  })

  it('can remove self', () => {
    const wrapper = shallow(<Todo />)
    wrapper.setProps(custom_todos)
    expect(wrapper.childAt(2).type()).toBe('button')
    wrapper.childAt(2).simulate('click')
  })
})
