import React from 'react'

const BestBooksContext = React.createContext({
    results: [],
    setResults: () => {},
    awards: [],
    setAwards: () => {}
})

export default BestBooksContext