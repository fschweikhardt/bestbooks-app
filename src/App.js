import React from 'react'
// import { Router } from 'react-router-dom'
import './App.css'
import DATA from './Database'
import BestBooksContext from './BestBooksContext'
import LandingPage from './LandingPage'  
import BookSearch from './BookSearch'
import GetRandomBook from './GetRandomBook'
import DisplayList from './DisplayList'

class App extends React.Component {
  state = {
    results: DATA["The Booker Prize"][0]
  }

  handleSetResults = setData => {
    this.setState({
      results: setData
    })
  }

  render() {
    const value = {
      results: this.handleSetResults
    }

    console.log(this.state.results)
    // let random = Math.floor(Math.random() * 3)
    // console.log(DATA["The Booker Prize"][random])

    return (
      <BestBooksContext.Provider value={value}>
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
      </BestBooksContext.Provider>
    );
  }
}

export default App
