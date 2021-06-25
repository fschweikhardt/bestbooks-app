import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import config from './config'
import { ClipLoader } from 'react-spinners'


export default function DisplayRandomBook(props) {

    function handleClick() {
        props.onCloseButton()
    }

    const [ thumbnail, setThumbnail ] = useState('')
    const [ snippet, setSnippet ] = useState('')
    const [ loading, setLoading ] = useState(true)
    
    const book = props.bookFromDatabase

    let authorString = `${book.author}`
    let authorSplit = authorString.split(' ')
    let authorUrl = authorSplit[1]

    let title = book.title
    let titleTrim = title.replaceAll(' ', '')
    
    let baseUrl = 'https://www.googleapis.com/books/v1/volumes?q='
    let url = `${baseUrl}${titleTrim}+inauthor:${authorUrl}&maxResults=1&projection=lite&key=${config.API_BOOKS_KEY}`

    axios(url)
        // .then(res => {
        //     if (!res.ok) {
        //         return res.json().then(e => Promise.reject(e))
        //     }
        //     return res.json()
        // })
        .then(res => {
            console.log(res)
            setThumbnail(res.data.items[0].volumeInfo.imageLinks.thumbnail)
            setSnippet(res.data.items[0].volumeInfo.description)
            setLoading(false)
        })
        .catch(err => {
            console.error({ err })
            setThumbnail('')
            // setLoading(true)
        })

        // style={{className: 'pop-up-background': backgroundColor: 'yellow'}}

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
                        {
                            loading ? 
                            <ClipLoader 
                                loading 
                                // style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                                /> : 
                            <img src={thumbnail} alt='none available' />
                        }
                        <br />
                        <br />
                        <p>{snippet}</p>
                </div>
            </div>
        )
    }
