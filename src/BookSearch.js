import React from 'react'
import DATA from './Database'
import BestBooksContext from './BestBooksContext'

export default class BookSearch extends React.Component {
    static contextType = BestBooksContext

    handleSubmit = e => {
        e.preventDefault()

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
        
    }

    getRandomBook = e => {
        e.preventDefault()
        console.log('random book')

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
    }

    render() {
        return (
            <div>
                <hr />
                <h1>Book Search</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h3>Award Lists</h3>
                            <input
                                type="radio"
                                name="award list"
                                id="The Booker Prize"
                                value="The Booker Prize"
                            />
                            <label htmlFor="The Booker Prize">
                            The Booker Prize
                            </label>
                        <br />
                            <input
                                type="radio"
                                name="award list"
                                id="National Book Award for Fiction"
                                value="National Book Award for Fiction"
                            />
                            <label htmlFor="National Book Award for Fiction">
                            National Book Award for Fiction
                            </label>
                        <br />
                            <input
                                type="radio"
                                name="award list"
                                id="The Pultizer Prize for Fiction"
                                value="The Pultizer Prize for Fiction"
                            />
                            <label htmlFor="The Pultizer Prize for Fiction">
                            The Pultizer Prize for Fiction
                            </label>
                        <br />
                    </div>
                    <div>
                        <h3>Year</h3>
                        <label htmlFor="year">
                            Choose a year
                            <select name="year" id="year">
                                <option value="optional"></option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                            </select>
                        </label>
                    </div>
                    {/* <div>
                        <h3>Author</h3>
                        <label htmlFor="author">
                            Seach by Author
                            <input 
                                type="search" 
                                name="author"
                                id="author" 
                                defaultValue="dan"
                            />
                        </label>
                    </div> */}
                    <br />
                    <button type="submit">
                        Submit
                    </button>
                </form>
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

