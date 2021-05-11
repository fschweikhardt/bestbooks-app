import React from 'react'
import config from './config'

export default function DisplayRandomBook(props) {

    function handleClick() {
        props.onCloseButton()
    }

    const book = props.bookFromDatabase
    const author = book.author
    // const authorSplit = author[1]
    const title = book.title
    // const titleTrim = title.trim()

    let baseUrl = 'https://www.googleapis.com/books/v1/volumes?q='
    let url = `${baseUrl}${title}+inauthor:${author}&key=${config.API_BOOKS_KEY}`
    // console.log('author', author)
    console.log('title', title)
    // console.log('url', url)
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

        return (
                <div className="modal modal_content">
                    <span className="close" onClick={handleClick}>
                        &times;
                    </span>
                    <div 
                        style={{
                            border: 'dotted', 
                            borderColor:'lightgray'}}
                    >
                        <h1 style={{fontSize: '28px'}}>
                            {book.award}
                        </h1>
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
