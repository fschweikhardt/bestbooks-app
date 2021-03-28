import React from 'react'
import BestBooksContext from './BestBooksContext'

export default class AwardInfo extends React.Component {
    static contextType = BestBooksContext
    
    render() {
            // const displayAwards = this.context.awards.map(name => {
            //     return (
            //         <option key={name} value={name}>
            //             {name}
            //         </option>
            //     )
            // })

        return (
            <div>
                <hr />
                <br />
                {/* <label htmlFor="award" >
                    Choose a award list
                        <br />
                        <select name="award" id="award" style={{width:'300px'}}>
                        <option key='0' defaultValue=''></option>
                            {displayAwards}
                        </select>
                    </label> */}
                <br />
                <h1>The Booker Prize</h1>
                    <p>The Booker Prize is a literary prize awarded each year for the best novel written in English 
                        and published in the United Kingdom or Ireland. This award is widely regarded as the most prestigeous literary award.</p>
                <br />
                <h1>National Book Award for Fiction</h1>
                    <p>The National Book Award for Fiction recognizes outstanding literary work 
                        by United States citizens. Since 1987 the awards have been 
                        administered and presented by the National Book Foundation, but 
                        they are awards "by writers to writers".</p>
                <br />
                <h1>The Pultizer Prize for Fiction</h1>
                    <p>The Pulitzer Prize for Fiction recognizes distinguished fiction by an American author, preferably 
                        dealing with American life, published during the preceding calendar year.</p>
                <br />
                <h1>The PEN/Bellwether Prize for Socially Engaged Fiction</h1>
                    <p>The PEN/Bellwether Prize for Socially Engaged Fiction is a biennial award given by the PEN America (formerly PEN American Center) and 
                        Barbara Kingsolver to a U.S. citizen for a previously unpublished work of fiction that address 
                        issues of social justice. The prize was established by noted author Barbara Kingsolver, and is 
                        funded by her. Winning authors receive a $25,000 award and a publishing contract, from which they receive royalties</p>
                <br />
                <h1>The National Book Critics Circle Award</h1>
                    <p>The National Book Critics Circle Awards are a set of annual American literary awarded to promote 
                        "the finest books and reviews published 
                        in English". The first NBCC awards were announced and presented January 16, 1976.</p>
                <br />
                <h1>The Andrew Carnegie Medals for Excellence in Fiction</h1>
                    <p>The Andrew Carnegie Medal for Excellence in Fiction was established in 2012 
                        to recognize the best fiction books for adult readers published in the U.S. 
                        in the previous year. They are named in honor of nineteenth-century American philanthropist 
                        Andrew Carnegie in recognition of his deep belief in the power of books and learning to change 
                        the world.</p>
            </div>
        )
    }
}