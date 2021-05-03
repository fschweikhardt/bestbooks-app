import React from 'react'
import Book from './Book'
import AwardBook from './AwardBook'
import BestBooksContext from './BestBooksContext'

export default class DisplayList extends React.Component {
    static contextType = BestBooksContext

    render() {
        const yearList = this.context.results
        const awardList = this.context.awardResults

        const noDisplay =
            <></>

        const yearDisplay =
                <div>
                    <hr />
                    <div>
                        <ul 
                        className='group-grid'
                        >
                            {this.context.results.map( display => {
                                return (
                                <li key={display.id} 
                                className='item'
                                style={{
                                    margin: '20px', 
                                    border: 'dotted', 
                                    borderColor:'lightgray'
                                    }}
                                >
                                    <Book 
                                        title={display.title}
                                        author={display.author}
                                        year={display.year}
                                        award={display.award}
                                    />
                                </li>
                            )})}
                        </ul>
                    </div>
                </div>

        const awardDisplay = 
            <div>
                <hr />  
                <br />
                <h1>{this.context.displayAward}</h1>
                <div>
                    <ul className='group-awards'>
                        {this.context.awardResults.map( display => {
                            return (
                            <li key={display.title} className='item'>
                                <AwardBook 
                                    title={display.title}
                                    author={display.author}
                                    year={display.year}
                                    award={display.award}
                                />
                            </li>
                        )})}
                    </ul>
                </div>
            </div>  
            
        if (yearList.length === 0 && awardList.length === 0) {
            return noDisplay
        } else if (this.context.awardResults.length === 0) {
            return yearDisplay
        } return awardDisplay
    }
}