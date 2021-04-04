import React from 'react'
import config from './config'
import BestBooksContext from './BestBooksContext'

export default class BookSearch extends React.Component {
    static contextType = BestBooksContext

    state = {
        years: [],
        awardSelected: '',
        yearSelected: ''
    }

    setAwardSelected = e => {
        this.setState({
            awardSelected: e.target.value
        })
        this.context.setDisplayAward(e.target.value)
    }

    setYearSelected = e => {
        this.setState({
            yearSelected: e.target.value
        })
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
                        this.context.setAwardResults(res)
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

        const displayAward = this.state.awardSelected === '' ? `Selected: nothing yet!` : `Selected: ${this.state.awardSelected}`
        const awardOptions = this.context.awards.map(award => {
            return (
                <li 
                    key={award}
                    style={{marginTop:'20px', marginBottom:'20px'}}
                    onClick={award => this.setAwardSelected(award)}
                >
                    <label 
                        htmlFor={award} 
                        key={award}
                        style={{
                            fontSize: '24px',
                            backgroundColor: 'lightgray'
                        }}
                    >
                        <input
                            type="radio"
                            name="award"
                            id={award}
                            value={award}
                        />
                        {award}
                    </label>
               </li>
            )
        })

        
            
        return (
            <div>
                <hr />
                <h1>Build Your Own Search</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='group'>
                        <div className='item'>
                            {/* <u><h2>Award Selected</h2></u> */}
                            {/* {displayAward} */}
                            {/* <h3>{this.state.awardSelected}</h3> */}
                            <br />
                            {awardOptions}
                            <br />
                        </div>
                        <div className='item'>
                            <u><h2>Award Selected</h2></u>
                            <h3>{this.state.awardSelected}</h3>
                            <br/>
                            <p>and/or</p>
                            <br/>
                            <div>
                                <label htmlFor="year">
                                    <h3>Choose a Year</h3>
                                    <select name="year" id="year" onChange={this.setYearSelected}>
                                    <option key='0' defaultValue=''></option>
                                        {yearOptions}
                                    </select>
                                </label>
                                <br/>
                            </div>
                            <br />
                            <u><h2>Year Selected</h2></u>
                            {this.state.yearSelected}
                            <br />
                            <button type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

