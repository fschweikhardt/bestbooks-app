import React from 'react'
// import BestBooksContext from './BestBooksContext'
import config from './config'

export default class DisplayRandomBook extends React.Component {
    // static contextType = BestBooksContext

    handleClick = () => {
        this.props.onCloseButton()
    }

    /* componentDidMount() {
        let book = this.context.randomBook
        console.log(book)
        let author = book.author.split(' ')
        let title = book.title
        let baseUrl = 'https://www.googleapis.com/books/v1/volumes?q='
        let url = `${baseUrl}${title.trim()}+inauthor:${author[1]}&key=${config.API_BOOKS_KEY}`
        console.log('author', author)
        console.log('title', title)
        console.log('url', url)
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.error({ err })
            })
    }

    */
    
    render() {
        console.log(this.props.bookFromDatabase)
        const book = this.props.bookFromDatabase

        // if (this.context.randomBook.length === 0) {
        //     return (
        //         <></>
        //     )
        // }
        return (
                <div className="modal modal_content">
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span>
                    <div 
                        style={{
                            // marginTop: '10px',
                            // marginBottom:'10px',
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

//https://www.googleapis.com/books/v1/volumes?q=JohnUpdikeRabbitIsRich&key=AIzaSyBWBhpvxfwM9xD5-_I2qej6KfUH0ufDSjo