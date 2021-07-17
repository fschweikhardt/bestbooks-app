import React from 'react'
import './App.css'
import config from './config'
import BestBooksContext from './BestBooksContext'
import LandingPage from './LandingPage' 
import GetRandomBook from './GetRandomBook' 
import About from './About'
import BookSearch from './BookSearch'
import DisplayList from './DisplayList'
import AwardInfo from './AwardInfo'


class App extends React.Component {
  state = {
    yearData: [],
    awardData: [],
    allAwardTitles: [],
    displayAward: ''
  }

  handleSetYearData = setData => {
    this.setState({
      yearData: setData
    })
  }

  handleSetAwardData = setData => {
    this.setState({
      awardData: setData
    })
  }

  handleSetDisplayAward = setData => {
    this.setState({
      displayAward: setData
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
                allAwardTitles: distinctAwards
            })
        })
        .catch(err => console.log(err))
}

  render() {
    const value = {
      yearData: this.state.yearData,
      awardData: this.state.awardData,
      setYearData: this.handleSetYearData,
      setAwardData: this.handleSetAwardData,
      setDisplayAward: this.handleSetDisplayAward,
      allAwardTitles: this.state.allAwardTitles,
      displayAward: this.state.displayAward
    }

    return (
      <BestBooksContext.Provider value={value}>
        <div className='pop-up-background'>
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
            <About />
            <BookSearch />
            <DisplayList />
            <AwardInfo />
          </main>
          <footer><hr />Created by Frank Schweikhardt. All rights reserved. Copyright 2021</footer>
        </div>
      </BestBooksContext.Provider>
    );
  }
}

export default App
