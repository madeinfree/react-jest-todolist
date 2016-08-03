import React from 'react'
import { mount, shallow } from 'enzyme'

import App from '../src/app.react'
import Todos from '../src/todos.react'
import Todo from '../src/todo.react'

jest
  .unmock('../src/app.react')
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

const custom_remove_todos = [
  {
    text: 'bar',
    completed: true
  }
]

const remote_mock_data = [
  {
    text: 'eat',
    completed: false
  },
  {
    text: 'run',
    completed: false
  },
  {
    text: 'sleep',
    completed: false
  }
]

const removeTodo = (idx) => {

  const mock_todos = [
    {
      text: 'foo',
      completed: false
    },
    {
      text: 'bar',
      completed: true
    }
  ]

  const todos = mock_todos.filter((todo, index) => {
    return index !== idx
  })

  return todos
}

describe('<App />', () => {
  it('can render App shallow component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.type()).toBe('div')
  })

  it('can render <h1> in App component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.childAt(0).type()).toBe('h1')
    expect(wrapper.childAt(0).text()).toBe('React Todo List Test By Jest')
  })

  it('can set todos state in App component and count state number', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state('todos').length).toBe(3)
  })

  it('can render <Todos> in App component', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(Todos).type()).toBe(Todos)
  })

  it('can render <Todos> first child div text', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(Todos).childAt(0).text()).toBe('Todos List')
  })

  it('can render <Todos> in App component and set custom state in it and count number', () => {
    const wrapper = mount(<App />)
    wrapper.setState({ todos: custom_todos })
    expect(wrapper.find(Todos).prop('todos').length).toBe(2)
  })

  it('can render <Todos> in App component and checkout data props', () => {
    const wrapper = mount(<App />)
    wrapper.setState({ todos: custom_todos })
    expect(wrapper.find(Todos).prop('todos')[0].text).toBe('foo')
    expect(wrapper.find(Todos).prop('todos')[0].completed).toBeFalsy()
    expect(wrapper.find(Todos).prop('todos')[1].text).toBe('bar')
    expect(wrapper.find(Todos).prop('todos')[1].completed).toBeTruthy()
  })

  it('can render <Todos> in App component and get todos props count number', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(Todos).prop('todos').length).toBe(3)
  })

  it('can render <Todos> in App component and checkout data props from remote fetch', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(Todos).prop('todos')[0].text).toBe(remote_mock_data[0].text)
    expect(wrapper.find(Todos).prop('todos')[0].completed).toBeFalsy()
    expect(wrapper.find(Todos).prop('todos')[1].text).toBe(remote_mock_data[1].text)
    expect(wrapper.find(Todos).prop('todos')[1].completed).toBeTruthy()
    expect(wrapper.find(Todos).prop('todos')[2].text).toBe(remote_mock_data[2].text)
    expect(wrapper.find(Todos).prop('todos')[2].completed).toBeTruthy()
  })

  it('can call App addTodo method', () => {
    const wrapper = mount(<App />)
    wrapper.childAt(2).find('button').simulate('click', { text: 'foobar', completed: false })
    expect(wrapper.state('todos').length).toBe(4)
    expect(wrapper.find(Todos).prop('todos')[3].text).toBe('foobar')
    expect(wrapper.find(Todos).prop('todos')[3].completed).toBeFalsy()
  })
})

describe('<Todos />', () => {
  it('can render and set Todos props then get children', () => {
    const wrapper = mount(<Todos todos={ custom_todos }/>)
    expect(wrapper.find(Todo).length).toBe(2)
  })
})
