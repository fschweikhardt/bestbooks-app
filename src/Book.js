import React from 'react'
import BestBooksContext from './BestBooksContext'

export default class Book extends React.Component {
    static contextType = BestBooksContext

    render() {
        console.log(this.context.results[0])
        let results = this.context.results[0]
        return (
            <div>
                <h1>{results.title}</h1>
                <p>by</p>
                <h2>{results.author}</h2>
                <p>published in</p>
                <h3>{results.year}</h3>
            </div>
        )
    }
}