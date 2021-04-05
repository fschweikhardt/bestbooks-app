import React from 'react'
import ReactDOM from 'react-dom'
import DisplayRandomBook from '../DisplayRandomBook'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DisplayRandomBook />, div)
})