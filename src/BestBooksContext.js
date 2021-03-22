import React from 'react'

const BestBooksContext = React.createContext({
    results: [],
    setResults: () => {}
})

export default BestBooksContext