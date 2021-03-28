import React from 'react'

const BestBooksContext = React.createContext({
    results: [],
    setResults: () => {},
    awards: []
})

export default BestBooksContext