import React from 'react'

export default function Book (props) {
    return (
        <div>
            <br/>
            <h1 style={{fontSize: '28px'}}>{props.award}</h1>
                <hr style={{padding: 0}}/>
                <h1 style={{
                    fontSize: '28px',
                    fontStyle:'italic',
                    fontWeight: 'bold'
                    }}>
                        {props.title}
                </h1>
                <p>by</p>
                <h2>{props.author}</h2>
                <p>published in</p>
                <h3>{props.year}</h3>
        </div>
    )
}