import React from 'react'
import './App.css'
import config from './config'
import BestBooksContext from './BestBooksContext'
import LandingPage from './LandingPage' 
import DisplayRandomBook from './DisplayRandomBook'
import GetRandomBook from './GetRandomBook' 
import About from './About'
import BookSearch from './BookSearch'
import DisplayList from './DisplayList'
import AwardInfo from './AwardInfo'

class App extends React.Component {
  state = {
    results: [],
    randomBook: [],
    awards: []
  }

  handleSetResults = setData => {
    this.setState({
      results: setData
    })
  }

  handleSetRandomBook = setData => {
    this.setState({
      randomBook: setData
    })
  }

  componentDidMount() {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${config.API_TOKEN}`
        }
    }
    
    fetch(`${config.API_BASE_URL}/api/get-awards`, options)
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
            return res.json()
        })
        .then(res => {
            let newAwards = res.map(x => x.award)
            const distinctAwards = [...new Set(newAwards)]
            this.setState({
                awards: distinctAwards
            })
        })
        .catch(err => console.log(err))
}

  render() {
    const value = {
      results: this.state.results,
      setResults: this.handleSetResults,
      setRandomBook: this.handleSetRandomBook,
      awards: this.state.awards,
      randomBook: this.state.randomBook
    }

    console.log(this.state.results)
    console.log(this.state.randomBook)
    console.log(this.state.awards)

    return (
      <BestBooksContext.Provider value={value}>
        <div>
          <header style={{fontSize:'12px'}}>
              “I shall be miserable if I have not an excellent library.” 
              – Jane Austen in <i>Pride and Prejudice</i> 
          <br/>
          <br/>
          <hr />
          </header>
          <main>
            <LandingPage />
            <GetRandomBook />
            <DisplayRandomBook />
            <About />
            <BookSearch />
            <DisplayList />
            <AwardInfo />
          </main>
          <footer><hr />Created by Frank Schweikhardt. All rights reserved. Copywrite 2021</footer>
        </div>
      </BestBooksContext.Provider>
    );
  }
}

export default App
