import React from 'react'
import Header from '../../components/header'
import FirstPage from './firstPage'
import AboutUs from './aboutus'
import ServicesPage from './services'
import OurProject from './ourprojects'
import Footer from './footer'
import Blogs from './blogs'

const Home = () => {
    return <div>
        <Header />
        <div style={{ marginBottom : 20}}>
            <FirstPage />
        </div>
        <div style={{ marginBottom : 20}}>
            <AboutUs />
        </div>
        <div style={{ marginBottom : 20}}>
            <ServicesPage />
        </div>
        <div style={{ marginBottom : 20}}>
            <OurProject />
        </div>
        <div>
            <Blogs />
        </div>
        <div>
            <Footer />
        </div>
    </div>
}

export default Home