import React from 'react'

export default function AwardBook (props) {
    return (
        <div style={{margin: '20px', border: 'dotted', borderColor:'lightgray'}}>
            <h1 style={{fontSize: '28px'}}>{props.year}</h1>
                <hr style={{marginLeft: '50px', marginRight: '50px'}}/>
                <h1 style={{
                    fontSize: '28px',
                    fontStyle:'italic',
                    fontWeight: 'bold'
                    }}>
                        {props.title}
                </h1>
                <p>by</p>
                <h2>{props.author}</h2> 
        </div>
    )
}