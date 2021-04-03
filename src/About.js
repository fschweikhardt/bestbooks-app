import React from 'react'

export default function About() {
    return (
        <div>
            <hr />
                <br />
                <p>Need help finding a great book to read? Then this app is for you. 
                Sort through award winning books and learn more about the world's 
                most prestigeous award lists.</p>
                <br />
                <hr style={{
                    borderTop:'dotted 3px lightgray', 
                    paddingBottom:'0px',
                    marginLeft:'100px',
                    marginRight:'100px',
                    }}/>
                <br />
                <h3>Click the "Get Random Book" Button Above</h3>
                <br />
                <h1 style={{fontStyle:'italic', fontWeight:'bold', fontSize:'30px'}}>
                    *     OR     *
                </h1>
        </div>
    )
}