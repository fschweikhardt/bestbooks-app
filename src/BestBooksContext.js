import React from 'react'

const BestBooksContext = React.createContext({
    setResults: () => {},
    setAwardResults: () => {},
    setDisplayAward: () => {},
    setRandomBook: () => {},
    results: [],
    awards: [],
    awardResults: [],
    randomBook: [],
    displayAward: ''
})

export default BestBooksContext