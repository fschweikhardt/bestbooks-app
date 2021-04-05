import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from '../LandingPage'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LandingPage />, div)
})