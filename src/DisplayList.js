import React from 'react'
import Book from './Book'

export default class DisplayList extends React.Component {

    render() {
        return (
            <div>
                <h1>Display List</h1>
                <div>
                    <Book />
                    <Book />
                    <Book />
                </div>
            </div>
        )
    }
}