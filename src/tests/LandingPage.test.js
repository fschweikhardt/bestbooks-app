import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../Header'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header />, div)
})