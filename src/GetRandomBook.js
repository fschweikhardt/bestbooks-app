import React from 'react'
import config from './config'
import BestBooksContext from './BestBooksContext'

export default class GetRandomBook extends React.Component {
    static contextType = BestBooksContext

    getRandomBook = e => {
        e.preventDefault()
        
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_TOKEN}`
            }
        }
        
        fetch(`${config.API_BASE_URL}/api/random-book`, options)
            .then( res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(res => {
                console.log(res)
                this.context.setRandomBook(res)
            })
            .catch (err => console.log(err))
    }

    render() {
        return (
            <div>
                <hr />
                <h2>Random book generator</h2>
                    <button 
                        type="button"
                        onClick={this.getRandomBook}
                        >
                        Get Random Book
                    </button>
            </div>
        )
    }
}