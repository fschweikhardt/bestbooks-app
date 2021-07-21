import React from 'react'
import reading from './images/reading.svg'

export default function About() {
    return (
        <div className='group'>
            {/* <div className='item'> */}
                <img 
                    src={reading} 
                    alt={'reading'} 
                    className='item'
                    style={{width: '500px', height: 'auto'}}/>
                <h3 className='item'>Need help finding a great book to read? Then this app is for you. Sort through award winning books and learn more about the world's most prestigeous award lists.</h3>
                <br />
                {/* <hr 
                    className='item hide-hr'
                    style={{
                        borderTop:'dotted 3px lightgray', 
                        paddingBottom:'0px',
                        marginLeft:'100px',
                        marginRight:'100px',
                        }}/> */}
            {/* </div> */}
            {/* <div className='item'>
                <p>Click the "Get Random Book" Button</p>
                <h1 style={{
                    fontStyle:'italic', 
                    fontWeight:'bold', 
                    fontSize:'30px'
                    }}>
                    *     OR     *
                </h1>
                <p>Search by Award List or Year</p>
            </div> */}
        </div>
    )
}