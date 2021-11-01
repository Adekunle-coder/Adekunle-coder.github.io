import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { EventContext } from '../EventContext'
import Footer from '../Homepage/Footer'
import Header from '../Homepage/Header'
import "./PagenotFound.css"

const PageNotFound = () => {
    const {Homeclick} = useContext(EventContext);
    return (
        <div>
            <Header />
            <div className = "error-page-div">
                <h1>Page Not Found</h1>
                <Link to = "/" onClick = {Homeclick}>
                <button>Go to Home</button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default PageNotFound
