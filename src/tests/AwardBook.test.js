import React from 'react'
import ReactDOM from 'react-dom'
import AwardBook from '../AwardBook'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AwardBook />, div)
}) 