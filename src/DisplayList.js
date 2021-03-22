import React from 'react'
import Book from './Book'
import BestBooksContext from './BestBooksContext'

export default class DisplayList extends React.Component {
    static contextType = BestBooksContext

    render() {
        console.log(this.context.results)
         if (this.context.results.length === 0) {
            console.log('empty')
            return (
                <div>
                    <p>push a button</p>
                </div>
            )
        }
        return (
            <div>
                <hr />
                <div>
                    <ul>
                        {this.context.results.map( display => {
                            return (
                            <li key={display.title}>
                                <Book 
                                    title={display.title}
                                    author={display.author}
                                    year={display.year}
                                    award={display.award}
                                />
                            </li>
                        )})}
                    </ul>
                </div>
            </div>
        )
    }
}