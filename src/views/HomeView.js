import React, { useState } from 'react'
import '../App.min.css';
import Navbar from '../sections/Navbar';
import OurSpecialty from '../sections/OurSpecialty';
import PicksFlashSale from '../sections/PicksFlashSale';
import SeventyOff from '../sections/SeventyOff';
import Showcase from '../sections/Showcase';
import Support from '../sections/Support';
import WinterNewArrivals from '../sections/WinterNewArrivals';
import Footer from '../sections/Footer'
import FeaturedProduct from '../sections/FeaturedProduct';
import FeaturedSale from '../sections/FeaturedSale';
import FeaturedSaleReverse from '../sections/FeaturedSaleReverse';
import LatestBestTop from '../sections/LatestBestTop';
import { useContext } from 'react';
import { productContext } from '../contexts/contexts';

const HomeView = () => {

    const featuredProducts = useContext(productContext)

    return (
        <>
            <Navbar />
            <Showcase />
            <WinterNewArrivals />
            <FeaturedProduct title="Featured Product" products={featuredProducts.featuredProducts} />
            <PicksFlashSale />
            <OurSpecialty />
            <FeaturedSale />
            <FeaturedSaleReverse />
            <SeventyOff />
            <LatestBestTop />
            <Support />
            <Footer />
        </>
    )
}

export default HomeView