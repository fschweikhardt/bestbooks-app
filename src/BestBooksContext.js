import React from 'react'

const BestBooksContext = React.createContext({
    setYearData: () => {},
    setAwardData: () => {},
    setDisplayAward: () => {},
    yearData: [],
    allAwardTitles: [],
    awardData: [],
    displayAward: ''
})

export default BestBooksContext