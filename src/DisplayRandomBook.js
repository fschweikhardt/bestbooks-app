import React from 'react'
import { useState } from 'react'
import config from './config'

export default function DisplayRandomBook(props) {

    function handleClick() {
        props.onCloseButton()
    }

    // state = {
    //     thumbnail: ''
    // }
    const [ thumbnail, setThumbnail ] = useState('')
    const [ snippet, setSnippet ] = useState('')
    
    const book = props.bookFromDatabase

    let authorString = `${book.author}`
    let authorSplit = authorString.split(' ')
    let authorUrl = authorSplit[1]
    console.log(authorUrl)

    let title = book.title
    let titleTrim = title.replaceAll(' ', '')
    console.log(titleTrim)
    
    let baseUrl = 'https://www.googleapis.com/books/v1/volumes?q='
    let url = `${baseUrl}${titleTrim}+inauthor:${authorUrl}&key=${config.API_BOOKS_KEY}`

    fetch(url)
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
            return res.json()
        })
        .then(data => {
            setThumbnail(data.items[0].volumeInfo.imageLinks.thumbnail)
            setSnippet(data.items[0].volumeInfo.description)
        })
        .catch(err => {
            console.error({ err })
            setThumbnail('')
        })

        return (
                <div className="modal_content">
                    <span className="close" onClick={handleClick}>
                        &times;
                    </span>
                    <div 
                        style={{
                            border: 'dotted', 
                            borderColor:'lightgray'}}
                    >
                        <h1>{book.award}</h1>
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
                        <br />
                        <img src={thumbnail} alt='none available' />
                        <br />
                        <br />
                        <p>{snippet}</p>
                </div>
            </div>
        )
    }
