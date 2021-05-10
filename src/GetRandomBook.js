import React from 'react'
import config from './config'
import BestBooksContext from './BestBooksContext'
import DisplayRandomBook from './DisplayRandomBook'

export default class GetRandomBook extends React.Component {
    static contextType = BestBooksContext

    state = {
        display: false
    }

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
                this.context.setRandomBook(res)
            })
            .catch (err => console.log(err))
        
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        const displayLogic = 
            this.state.display ? <DisplayRandomBook getRandomBook={this.getRandomBook}/> : null

        return (
            <div>
                {/* <hr className='hide-hr' /> */}
                <h2>Random book generator</h2>
                    <button 
                        type="button"
                        onClick={this.getRandomBook}
                        >
                        Get Random Book
                    </button>
               {displayLogic}
            </div>
        )
    }
}