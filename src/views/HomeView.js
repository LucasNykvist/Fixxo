import React from 'react'
import '../App.min.css';
import Navbar from '../sections/Navbar';
import OurSpecialty from '../sections/OurSpecialty';
import PicksFlashSale from '../sections/PicksFlashSale';
import SeventyOff from '../sections/SeventyOff';
import Showcase from '../sections/Showcase';
import Support from '../sections/Support';
import WinterNewArrivals from '../sections/WinterNewArrivals';
import Footer from '../sections/Footer'

const HomeView = () => {
    return (
        <>
            <Navbar />
            <Showcase />
            <WinterNewArrivals />
            <PicksFlashSale />
            <OurSpecialty />
            <SeventyOff />
            <Support />
            <Footer />
        </>
    )
}

export default HomeView