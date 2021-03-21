import React from 'react'
import './App.css'
import DATA from './Database'
import LandingPage from './LandingPage'  
import BookSearch from './BookSearch'
import GetRandomBook from './GetRandomBook'
import DisplayList from './DisplayList'

class App extends React.Component {
  state = {
    results: DATA["The Booker Prize"][0]
  }

  render() {
    console.log(this.state.results)
    // let random = Math.floor(Math.random() * 3)
    // console.log(DATA["The Booker Prize"][random])

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
