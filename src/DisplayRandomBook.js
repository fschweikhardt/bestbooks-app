import React from 'react'
//import Book from './Book'
import BestBooksContext from './BestBooksContext'

export default class bookRandomBook extends React.Component {
    static contextType = BestBooksContext

    render() {
        console.log(this.context.randomBook)
        const book = this.context.randomBook

         if (this.context.randomBook.length === 0) {
            return (
                <div>
                    <p>push a button</p>
                </div>
            )
        }
        return (
            <div style={{margin: '20px', border: 'dotted', borderColor:'lightgray'}}>
            <h1 style={{fontSize: '28px'}}>{book.award}</h1>
                <hr style={{marginLeft: '50px', marginRight: '50px'}}/>
                <h1 style={{
                    fontSize: '28px',
                    fontStyle:'italic',
                    fontWeight: 'bold'
                    }}>
                        {book.title}
                </h1>
                <p>by</p>
                <h2>{book.author}</h2>
                <p>published in</p>
                <h3>{book.year}</h3>
        </div>
        )
    }
}