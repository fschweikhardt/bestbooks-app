import React from 'react'
import ReactDOM from 'react-dom'
import BookSearch from '../BookSearch'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BookSearch />, div)
})