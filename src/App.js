import React from 'react'
import './App.css'
import BestBooksContext from './BestBooksContext'
import LandingPage from './LandingPage'  
import BookSearch from './BookSearch'
import DisplayList from './DisplayList'

class App extends React.Component {
  state = {
    results: []
  }

  handleSetResults = setData => {
    this.setState({
      results: setData
    })
  }

  render() {
    const value = {
      results: this.state.results,
      setResults: this.handleSetResults
    }

    console.log(this.state.results)
    
    return (
      <BestBooksContext.Provider value={value}>
        <div>
          <header>Header<hr /></header>
          <main>
            <LandingPage />
            <BookSearch />
            <DisplayList />
          </main>
          <footer><hr /> Footer</footer>
        </div>
      </BestBooksContext.Provider>
    );
  }
}

export default App
