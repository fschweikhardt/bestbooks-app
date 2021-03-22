import React from 'react'

export default function Book (props) {
    return (
        <div>
            <hr />
            <h1>{props.title}</h1>
            <p>by</p>
            <h2>{props.author}</h2>
            <p>published in</p>
            <h3>{props.year}</h3>
            <p>awarded</p>
            <h3>{props.award}</h3>
        </div>
    )
}