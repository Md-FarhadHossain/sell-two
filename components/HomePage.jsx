import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import WhySection from './WhySection'
import SeePages from './SeePages'
import HowToOrder from './HowToOrder'
import CustomarsReview from './CustomarsReview'
import DownloadNowHome from './DownloadNowHome'
import Footer from './Footer'

const HomePage = () => {
  
  return (
    <>
        <Navbar />
        <HeroSection />
        <WhySection />
        <SeePages />
        <HowToOrder />
        <CustomarsReview />
        <DownloadNowHome />
        <Footer />
    </>
  )
}

export default HomePage