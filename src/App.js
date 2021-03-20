import React from 'react'
import './App.css'
import LandingPage from './LandingPage'
import BookSearch from './BookSearch'
import DisplayList from './DisplayList'

class App extends React.Component {
  render() {
    return (
      <div>
        <header>Header</header>
        <main>
          <LandingPage />
          <BookSearch />
          <DisplayList />
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App
