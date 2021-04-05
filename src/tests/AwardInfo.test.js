import React from 'react'
import ReactDOM from 'react-dom'
import AwardInfo from '../AwardInfo'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AwardInfo />, div)
})