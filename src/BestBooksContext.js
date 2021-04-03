import React from 'react'

const BestBooksContext = React.createContext({
    results: [],
    setResults: () => {},
    setRandomBook: () => {},
    awards: [],
    randomBook: []
})

export default BestBooksContext