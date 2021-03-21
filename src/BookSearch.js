import React from 'react'
import DATA from './Database'

export default class BookSearch extends React.Component {

    handleSubmit = e => {
        e.preventDefault()
        // console.log('list1 :', e.target.list1.name)
        //console.log(e.target.year.value)
        // console.log(e.target.author.value)

        let Data = DATA
        let lists = []
        let awardBooks = []

        //filter by award list
        if (e.target.list1.checked === true) {
            lists.push(e.target.list1.name)
        }
        if (e.target.list2.checked === true) {
            lists.push(e.target.list2.name)
        }
        if (e.target.list3.checked === true) {
            lists.push(e.target.list3.name)
        }
        
        for (const value of lists.values()) {
            awardBooks.push(Data[value])
        }
        awardBooks = awardBooks.flat()
        console.log(awardBooks)
        
        //filter by year
        let year = e.target.year.value
        let yearBooks = []

        if (!isNaN(year) ) {
            console.log(year, ' selected')
            Data
        }


        //filter by input

    }

    render() {
        return (
            <div>
                <hr />
                <h1>Book Search</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h3>Award Lists</h3>
                        <br />
                        <label htmlFor="The Booker Prize">
                            The Booker Prize
                            <input
                                type="checkbox"
                                name="The Booker Prize"
                                id="list1"
                            />
                        </label>
                        <br />
                        <label htmlFor="National Book Award for Fiction">
                            National Book Award for Fiction
                            <input
                                type="checkbox"
                                name="National Book Award for Fiction"
                                id="list2"
                            />
                        </label>
                        <br />
                        <label htmlFor="The Pultizer Prize for Fiction">
                            The Pultizer Prize for Fiction
                            <input
                                type="checkbox"
                                name="The Pultizer Prize for Fiction"
                                id="list3"
                            />
                        </label>
                        <br />
                        <button>
                            all
                        </button>
                        <button>
                            none
                        </button>
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
                    <div>
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
                    </div>
                    <br />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

