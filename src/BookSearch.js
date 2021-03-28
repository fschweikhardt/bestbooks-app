import React from 'react'
import BestBooksContext from './BestBooksContext'
// import { API_ENDPOINT, API_TOKEN } from './config'

export default class BookSearch extends React.Component {
    static contextType = BestBooksContext

    state = {
        years: [],
        awards: []
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer 123456789'
            }
        }
        
        fetch(`http://localhost:9000/api/get-years`, options)
            .then( res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(res => {
                this.setState({
                    years: res
                })
            })
            .catch (err => console.log(err))

        fetch(`http://localhost:9000/api/get-awards`, options)
            .then( res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(res => {
                this.setState({
                    awards: res
                })
            })
            .catch (err => console.log(err))
    }

    getRandomBook = e => {
        e.preventDefault()
        console.log('random book clicked')
        
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer 123456789'
            }
        }
        
        fetch(`http://localhost:9000/api/random-book`, options)
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
                        'Authorization': 'Bearer 123456789'
                    }
                }
                fetch(`http://localhost:9000/api/award-list`, options)
                    .then(res => {
                        if (!res.ok) {
                            return res.json().then(e => Promise.reject(e))
                        }
                        return res.json()
                    })
                    .then(res => {
                        console.log(res)
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
                        'Authorization': `Bearer 123456789`
                    }
                }
                fetch(`http://localhost:9000/api/year-list`, options)
                    .then(res => {
                        if (!res.ok) {
                            return res.json().then(e => Promise.reject(e))
                        }
                        return res.json()
                    })
                    .then(res => {
                        console.log([res])
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
                        'Authorization' : 'Bearer 123456789'
                    }
                }
                fetch(`http://localhost:9000/api/specific-book`, options)
                    .then(res => {
                        if (!res.ok) {
                            return res.json().then(e => Promise.reject(e))
                        }
                        return res.json()
                    })
                    .then(res => {
                        console.log([res])
                        this.context.setResults([res])
                    })
                    .catch(err => console.log(err))
        } 
    }

/*
        let Data = DATA

        // get all books from  Data
        let awards = Object.keys(Data)
        let allBooks = []
        for (const value of awards.values()) {
            allBooks.push(Data[value])
        }
        allBooks = allBooks.flat()
        //console.log('all books', allBooks)

        //filter by award list radio buttons
        let awardBooks = []
        let list = e.target["award list"].value
        if (list) {
            awardBooks = Data[list]
        } 
        console.log('awardBooks', awardBooks)

        //filter by year
        let yearValue = Number(e.target.year.value)
        let yearBooks = []
        if (yearValue) {
            for (let i = 0; i < allBooks.length; i++) {
                if (allBooks[i].year === yearValue) {
                    yearBooks[i] = allBooks[i]
                }
            }
        }
        yearBooks = yearBooks.filter(Boolean)
        console.log('yearBooks', yearBooks)

        //if nothing selected
        if (awardBooks.length === 0 && yearBooks.length === 0   ) {
            return alert("please pick a list or year or click 'Get Random Book' below")
        }

        //if yearBooks and no awardBooks selected
        if (awardBooks.length === 0 && yearBooks.length > 0) {
            console.log('setState to yearBooks results')
            this.context.setResults(yearBooks)
        }

        //if awardBooks and no yearBooks selected
        if (awardBooks.length > 0 && yearBooks.length === 0) {
            console.log('setState to awardBooks results')
            this.context.setResults(awardBooks)
        }

        //if list and year are selected return book(s) from yearValue
        //get the books with the correct year
        if (awardBooks.length > 0 && yearBooks.length > 0) {
            let filtered = [...awardBooks].filter( books => books.year === yearValue)   
            console.log(filtered)
            this.context.setResults(filtered)
        }
*/
 
/*
        // get all books from  Data
        let Data = DATA
        let awards = Object.keys(Data)
        let allBooks = []
        for (const value of awards.values()) {
            allBooks.push(Data[value])
        }
        allBooks = allBooks.flat()
        //console.log('all books', allBooks)
        let randomPick = allBooks[Math.floor(Math.random() * allBooks.length)]
        console.log(randomPick)
        this.context.setResults([randomPick])
*/

    render() {
       // console.log(`${config.API_ENDPOINT}, ${config.API_TOKEN}`, config.API_ENDPOINT, config.API_TOKEN)
        let years = this.state.years
        let newYears = years.map( x => x.year)
        const distinctYears = [...new Set(newYears)]
        console.log(distinctYears)
        
        //console.log(this.state.awards)
        let awards = this.state.awards
        let newAwards = awards.map(x => x.award)
        const distinctAwards = [...new Set(newAwards)]
        console.log(distinctAwards)

        return (
            <div>
                <hr />
                <h1>Book Search</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h3>Award Lists</h3>
                            <input
                                type="radio"
                                name="award"
                                id="The Booker Prize"
                                value="The Booker Prize"
                            />
                            <label htmlFor="The Booker Prize">
                            The Booker Prize
                            </label>
                        <br />
                            <input
                                type="radio"
                                name="award"
                                id="National Book Award for Fiction"
                                value="National Book Award for Fiction"
                            />
                            <label htmlFor="National Book Award for Fiction">
                            National Book Award for Fiction
                            </label>
                        <br />
                            <input
                                type="radio"
                                name="award"
                                id="The Pultizer Prize for Fiction"
                                value="The Pultizer Prize for Fiction"
                            />
                            <label htmlFor="The Pultizer Prize for Fiction">
                            The Pultizer Prize for Fiction
                            </label>
                        <br />
                    </div>
                    <p>and/or</p>
                    <div>
                        <h3>Year</h3>
                        <label htmlFor="year">
                            Choose a year
                            <select name="year" id="year">
                                <option value=""></option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
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

