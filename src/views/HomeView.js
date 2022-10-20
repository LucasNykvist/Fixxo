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

const HomeView = () => {

    const [products, setProducts] = useState([
        { id: 1, name: "Nike Air Jordan 1 Retro", category: "Shoes", price: "$120.00", rating: 5, img: "https://fr.kicksmaniac.com/zdjecia/2020/11/14/211/47/NIKE_AIR_JORDAN_1_RETRO_HIGH_OG_ROYAL_TOEs-mini.jpg?mini" },
        { id: 2, name: "Nike Air Jordan 1 Royal", category: "Shoes", price: "$125.00", rating: 5, img: "https://hu.basketzone.net/zdjecia/2022/08/14/808/15/NIKE_AIR_JORDAN_1_RETRO_HIGH_OG_WMNS_COURT_PURPLEs-mini.jpg?mini" },
        { id: 3, name: "Nike Air Jordan 1 Cream", category: "Shoes", price: "$90.00", rating: 5, img: "https://es.basketzone.net/zdjecia/2021/08/07/808/17/NIKE_AIR_JORDAN_1_RETRO_HIGH_85_NEUTRAL_GREYs-mini.jpg?mini" },
        { id: 4, name: "Nike Air Jordan 1 Neon-Green", category: "Shoes", price: "$150.00", rating: 5, img: "https://it.kicksmaniac.com/zdjecia/2021/03/17/903/28/NIKE_AIR_JORDAN_1_RETRO_HIGH_OG_VOLT_GOLDs-mini.jpg?mini" },
        { id: 5, name: "Nike Air Jordan 1 University", category: "Shoes", price: "$125.00", rating: 5, img: "https://no.basketzone.net/zdjecia/2022/08/14/808/14/NIKE_AIR_JORDAN_1_RETRO_HIGH_OG_WHITE_UNIVERSITY_BLUEs-mini.jpg?mini" },
        { id: 6, name: "Nike Air Force 1 Multi-Swoosh", category: "Shoes", price: "$90.00", rating: 5, img: "https://fr.kicksmaniac.com/zdjecia/2021/09/21/709/53/NIKE_AIR_FORCE_1_LOW_MULTI_SWOOSH_GREEN_WHITEs-mini.jpg?mini" },
        { id: 7, name: "Nike Air Jordan 35 Cosmic", category: "Shoes", price: "$200.00", rating: 5, img: "https://pl.kicksmaniac.com/zdjecia/2021/06/02/806/52/NIKE_AIR_JORDAN_35_LOW_COSMIC_LUKA_DONCIC_PEs-mini.jpg?mini" },
        { id: 8, name: "Nike Air Jordan 35 Chrome", category: "Shoes", price: "$150.00", rating: 5, img: "https://se.basketzone.net/zdjecia/2021/07/10/607/16/NIKE_AIR_JORDAN_35_LOW_CHROME_LUKA_DONCIC_PEs-mini.jpg?mini" }
    ])

    return (
        <>
            <Navbar />
            <Showcase />
            <WinterNewArrivals />
            <FeaturedProduct title="Featured Product" products={products} />
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