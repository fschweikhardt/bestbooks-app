import React from 'react'
import ReactDOM from 'react-dom'
import Book from '../Book'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Book />, div)
})