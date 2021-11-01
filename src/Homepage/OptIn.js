import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { EventContext } from '../EventContext'
import "./OptIn.css"

const OptIn = () => {
    const {Customersclick} = useContext(EventContext);
    return (
        <div>
           <div className = "optin-container">
           <div className = "optin">
                <div className = "optin-heading">
                <h3>Join the millions of users worldwide trusting eNaira everyday</h3>
                </div>
                <div className = "optin-btns">
                    <button className = "cmmt-join">Join Community</button>
                    <Link to = "/CustomersPage">
                    <button className = "cmt-learn" onClick={Customersclick}>Learn More</button>
                    </Link>
                </div>
            </div>
           </div>
        </div>
    )
}

export default OptIn
