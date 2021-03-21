import React from 'react'
import DATA from './Database'

export default class BookSearch extends React.Component {

    handleSubmit = e => {
        e.preventDefault()
        // if (e.target.list1.checked == true) return alert('checked')
        console.log(e.target.list1.checked)
        console.log(e.target.year.value)
        console.log(e.target.author.value)
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
                                value="include"
                            />
                        </label>
                        <br />
                        <label htmlFor="National Book Award for Fiction">
                            National Book Award for Fiction
                            <input
                                type="checkbox"
                                name="National Book Award for Fiction"
                                id="list2"
                                value="National Book Award for Fiction"
                            />
                        </label>
                        <br />
                        <label htmlFor="The Pultizer Prize for Fiction">
                            The Pultizer Prize for Fiction
                            <input
                                type="checkbox"
                                name="The Pultizer Prize for Fiction"
                                id="list3"
                                value="The Pultizer Prize for Fiction"
                            />
                        </label>
                        <br />
                    </div>
                    <div>
                        <h3>Year</h3>
                        <label htmlFor="year">
                            Choose a year
                            <select name="year" id="year">
                                <option hidden disabled selected value></option>
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

