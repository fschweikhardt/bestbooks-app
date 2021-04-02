import React from 'react'
import config from './config'
import BestBooksContext from './BestBooksContext'

export default class BookSearch extends React.Component {
    static contextType = BestBooksContext

    state = {
        years: [],
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_TOKEN}`
            }
        }
        
        fetch(`${config.API_BASE_URL}/api/get-years`, options)
            .then( res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(res => {
                let newYears = res.map( x => x.year)
                const distinctYears = [...new Set(newYears)]
                this.setState({
                    years: distinctYears
                })
            })
            .catch (err => console.log(err))
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
                console.log([res])
                this.context.setResults([res])
            })
            .catch (err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault()

        if (!e.target.award.value && !e.target.year.value) return alert('select something')

        if (e.target.award.value && !e.target.year.value) {
            
                let award = {
                    'award' : e.target.award.value
                }
                let options = {
                    method: 'POST',
                    body: JSON.stringify(award),
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${config.API_TOKEN}`
                    }
                }
                fetch(`${config.API_BASE_URL}/api/award-list`, options)
                    .then(res => {
                        if (!res.ok) {
                            return res.json().then(e => Promise.reject(e))
                        }
                        return res.json()
                    })
                    .then(res => {
                        this.context.setResults(res)
                    })
                    .catch (err => console.log(err))

        }
        if (!e.target.award.value && e.target.year.value) {

                let year = {
                    'year' : e.target.year.value
                }
                let options = {
                    method: 'POST',
                    body: JSON.stringify(year),
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${config.API_TOKEN}`
                    }
                }
                fetch(`${config.API_BASE_URL}/api/year-list`, options)
                    .then(res => {
                        if (!res.ok) {
                            return res.json().then(e => Promise.reject(e))
                        }
                        return res.json()
                    })
                    .then(res => {
                        this.context.setResults(res)
                    })
                    .catch(err => console.log(err))
        }

        if (e.target.award.value && e.target.year.value) {

                let book = {
                    'award' : e.target.award.value,
                    'year' : e.target.year.value
                }
                let options = {
                    method: 'POST',
                    body: JSON.stringify(book),
                    headers: {
                        'content-type' : 'application/json',
                        'Authorization': `Bearer ${config.API_TOKEN}`
                    }
                }
                fetch(`${config.API_BASE_URL}/api/specific-book`, options)
                    .then(res => {
                        if (!res.ok) {
                            return res.json().then(e => Promise.reject(e))
                        }
                        return res.json()
                    })
                    .then(res => {
                        this.context.setResults([res])
                    })
                    .catch(err => console.log(err))
        } 
    }

    render() {
        
        const yearOptions = this.state.years.map(year => {
            return (
                <option key={year} value={year}>
                    {year}
                </option>
            )
        })

        const awardOptions = this.context.awards.map(award => {
            return (
                <label htmlFor={award} key={award}>
                    <br />
                    <input
                        type="radio"
                        name="award"
                        id={award}
                        value={award}
                    />
                    {award}
                </label>
            )
        })
            
        return (
            <div>
                <hr />
                <h1>Book Search</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h3>Award Lists</h3>
                        {awardOptions}
                        <br />
                    </div>
                    <p>and/or</p>
                    <div>
                        <h3>Year</h3>
                        <label htmlFor="year">
                            Choose a year
                            <select name="year" id="year">
                            <option key='0' defaultValue=''></option>
                                {yearOptions}
                            </select>
                        </label>
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </form>
                <p>or</p>
                <div>
                    <h2>Random book generator</h2>
                    <button 
                        type="button"
                        onClick={this.getRandomBook}
                        >
                        Get Random Book
                    </button>
                </div>
            </div>
        )
    }
}

