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
import FeaturedProduct from '../sections/FeaturedProduct';
import FeaturedSale from '../sections/FeaturedSale';
import FeaturedSaleReverse from '../sections/FeaturedSaleReverse';
import LatestBestTop from '../sections/LatestBestTop';
import { useContext } from 'react';
import { productContext } from '../contexts/contexts';

const HomeView = () => {

    window.top.document.title = "Home | Fixxo"
    const products = useContext(productContext)

    return (
        <>
            <Navbar />
            <Showcase />
            <WinterNewArrivals />
            <FeaturedProduct title="Featured Product" products={products.allProducts} />
            <PicksFlashSale />
            <OurSpecialty />
            <FeaturedSale products={products.allProducts} />
            <FeaturedSaleReverse products={products.allProducts} />
            <SeventyOff />
            <LatestBestTop products={products.allProducts} />
            <Support />
            <Footer />
        </>
    )
}

export default HomeView