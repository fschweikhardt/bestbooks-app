import React from 'react'
import './App.css'
import BestBooksContext from './BestBooksContext'
import LandingPage from './LandingPage'  
import BookSearch from './BookSearch'
import DisplayList from './DisplayList'
import AwardInfo from './AwardInfo'

class App extends React.Component {
  state = {
    results: [],
    awards: []
  }

  handleSetResults = setData => {
    this.setState({
      results: setData
    })
  }

  componentDidMount() {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer 123456789'
        }
    }
    
    fetch(`http://localhost:9000/api/get-awards`, options)
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
            return res.json()
        })
        .then(res => {
            let newAwards = res.map(x => x.award)
            const distinctAwards = [...new Set(newAwards)]
            // this.context.setAwards(distinctAwards)
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
      awards: this.state.awards
    }

    console.log(this.state.results)
    console.log(this.state.awards)

    return (
      <BestBooksContext.Provider value={value}>
        <div>
          <header>
              “I shall be miserable if I have not an excellent library.” 
              – Jane Austen in <i>Pride and Prejudice</i> 
          <br/>
          <br/>
          <hr />
          </header>
          <main>
            <LandingPage />
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
