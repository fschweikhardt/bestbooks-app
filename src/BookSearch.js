import React from 'react'

export default class BookSearch extends React.Component {

    render() {
        return (
            <div>
                <hr />
                <h1>Book Search</h1>
                <form onSubmit={this.submitForm}>
                    <div>
                        <h3>Award Lists</h3>
                        <label>
                            Lists 1
                            <input
                                type="checkbox"/>
                        </label>
                        <label>
                            Lists 2
                            <input
                                type="checkbox"/>
                        </label>
                        <label>
                            Lists 3
                            <input
                                type="checkbox"/>
                        </label>
                    </div>
                    <div>
                        <h3>Year</h3>
                        <label htmlFor="year">
                            Choose a year
                            <select name="year">
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
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
                                id="author" />
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

