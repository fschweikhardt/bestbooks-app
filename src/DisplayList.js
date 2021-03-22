import React from 'react'
import Book from './Book'
import BestBooksContext from './BestBooksContext'

export default class DisplayList extends React.Component {
    static contextType = BestBooksContext

    render() {
        console.log(this.context.results)
        return (
            <div>
                <hr />
                <h1>Display List</h1>
                <div>
                    <ul>
                        {this.context.results.map( display => {
                            return (
                            <li key={display.title}>
                                <Book 
                                    title={display.title}
                                    author={display.author}
                                    year={display.year}
                                />
                            </li>
                        )})}
                    </ul>
                </div>
            </div>
        )
    }
}