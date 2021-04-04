import React from 'react'

export default function About() {
    return (
        <div className='group'>
            
                <br />
                <p classname='item'>Need help finding a great book to read? Then this app is for you. 
                Sort through award winning books and learn more about the world's 
                most prestigeous award lists.</p>
                <br />
                <hr 
                    className='item hide-hr'
                    style={{
                        borderTop:'dotted 3px lightgray', 
                        paddingBottom:'0px',
                        marginLeft:'100px',
                        marginRight:'100px',
                        }}/>
                <br />
                <div>
                    <p>Click the "Get Random Book" Button</p>
                    <h1 style={{
                        fontStyle:'italic', 
                        fontWeight:'bold', 
                        fontSize:'30px'
                        }}>
                        *     OR     *
                    </h1>
                    <p>Search by Award List or Year</p>
                </div>
                <br />
        </div>
    )
}