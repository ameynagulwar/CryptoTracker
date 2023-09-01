import React from 'react'
import Header from '../components/Common/Header'
import MainComponent from '../components/LandingPage/MainComponent'
import BackToTop from '../components/Common/BackToTop'
import Footer from '../components/Common/Footer'

function HomePage() {
  return (
    <div>
        <BackToTop/>
        <Header/>
        <MainComponent/>
        <Footer/>
    </div>
  )
}

export default HomePage