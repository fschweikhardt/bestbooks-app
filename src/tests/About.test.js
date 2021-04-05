import React from 'react'
import ReactDOM from 'react-dom'
import About from '../About'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<About />, div)
})