import React from 'react'
import BestBooksContext from './BestBooksContext'

export default class DisplayRandomBook extends React.Component {
    static contextType = BestBooksContext

    handleClick = () => {
        this.props.onCloseButton()
    }
    
    render() {
        const book = this.context.randomBook

        if (this.context.randomBook.length === 0) {
            return (
                <></>
            )
        }
        return (
                <div className="modal modal_content">
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span>
                    <div 
                        style={{
                            marginTop: '10px',
                            marginBottom:'10px',
                            border: 'dotted', 
                            borderColor:'lightgray'}}
                    >
                    <h1 style={{fontSize: '28px'}}>{book.award}</h1>
                        <hr style={{marginLeft: '50px', marginRight: '50px'}}/>
                        <h1 style={{
                            fontSize: '28px',
                            fontStyle:'italic',
                            fontWeight: 'bold'
                            }}>
                                {book.title}
                        </h1>
                        <p>by</p>
                        <h2>{book.author}</h2>
                        <p>published in</p>
                        <h3>{book.year}</h3>
                </div>
            </div>
        )
    }
}