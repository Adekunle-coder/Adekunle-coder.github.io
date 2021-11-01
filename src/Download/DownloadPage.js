import React from 'react'
import TabShowcase from '../About/TabShowcase'
import Footer from '../Homepage/Footer'
import Header from '../Homepage/Header'
import OptIn from '../Homepage/OptIn'
import Scan from '../Homepage/Scan'

const DownloadPage = () => {
    let image = "./Images/features.jpeg"

    return (
        <div>
            <Header />
            <TabShowcase image={image} text="Download eNaira Wallet App" />
            <Scan />
            <OptIn />
            <Footer />

        </div>
    )
}

export default DownloadPage
