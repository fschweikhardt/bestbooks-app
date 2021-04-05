import React from 'react'
import ReactDOM from 'react-dom'
import DisplayList from '../DisplayList'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DisplayList />, div)
})