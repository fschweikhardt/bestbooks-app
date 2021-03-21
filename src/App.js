import React from 'react'
import './App.css'
import DATA from './Database'
import LandingPage from './LandingPage'  
import BookSearch from './BookSearch'
import GetRandomBook from './GetRandomBook'
import DisplayList from './DisplayList'

class App extends React.Component {

  render() {
    console.log(Object.keys(DATA))

    return (
      <div>
        <header>Header</header>
        <main>
          <LandingPage />
          <BookSearch />
          <GetRandomBook />
          <DisplayList />
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App
