import React from 'react'
import config from './config'
import DisplayRandomBook from './DisplayRandomBook'

export default class GetRandomBook extends React.Component {

    state = {
        display: false,
        bookFromDatabase: {
                id: 80, 
                award: "National Book Award for Fiction", 
                title: "The Moviegoer", 
                author: "Walker Percy", 
                year: 1962
            }
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
                this.setState({
                    bookFromDatabase: res
                })
            })
            .catch (err => console.log(err))
            
        this.setState({
            display: true
        })
    }

    handleCloseButton = () => {
        this.setState({
            display: false,
            // bookFromDatabase: null
            // bookFromDatabase: {
            //     id: null, 
            //     award: null, 
            //     title: null, 
            //     author: null, 
            //     year: null
            // }
        })
    }

    render() {

        return (
            <div>
                <h2>Random book generator</h2>
                    <button 
                        type="button"
                        onClick={this.getRandomBook}
                        >
                        Get Random Book
                    </button>
               {this.state.display ? 
                    <DisplayRandomBook 
                        bookFromDatabase={this.state.bookFromDatabase} 
                        onCloseButton={this.handleCloseButton}
                    /> : null 
                }
            </div>
        )
    }
}