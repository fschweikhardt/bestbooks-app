import React from 'react'
import ReactDOM from 'react-dom'
import GetRandomBook from '../GetRandomBook'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GetRandomBook />, div)
})