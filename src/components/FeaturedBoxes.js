import React, { useState } from 'react'
import ProductBox from './ProductBox'
import ProductBoxSmall from './ProductBoxSmall'

const FeaturedBoxes = () => {

    const [saleProducts, setSaleProducts] = useState([
        { id: 1, name: "Nike Air Jordan 1 Retro", category: "Shoes", price: "$120.00", rating: 5, img: "https://fr.kicksmaniac.com/zdjecia/2020/11/14/211/47/NIKE_AIR_JORDAN_1_RETRO_HIGH_OG_ROYAL_TOEs-mini.jpg?mini" },
        { id: 2, name: "Nike Air Jordan 1 Royal", category: "Shoes", price: "$125.00", rating: 5, img: "https://hu.basketzone.net/zdjecia/2022/08/14/808/15/NIKE_AIR_JORDAN_1_RETRO_HIGH_OG_WMNS_COURT_PURPLEs-mini.jpg?mini" },
        { id: 3, name: "Nike Air Jordan 1 Cream", category: "Shoes", price: "$90.00", rating: 5, img: "https://es.basketzone.net/zdjecia/2021/08/07/808/17/NIKE_AIR_JORDAN_1_RETRO_HIGH_85_NEUTRAL_GREYs-mini.jpg?mini" },
        { id: 4, name: "Nike Air Jordan 1 Neon-Green", category: "Shoes", price: "$150.00", rating: 5, img: "https://it.kicksmaniac.com/zdjecia/2021/03/17/903/28/NIKE_AIR_JORDAN_1_RETRO_HIGH_OG_VOLT_GOLDs-mini.jpg?mini" },
    ])
    return (
        <div className='featured-boxes'>
            {
                saleProducts.map(saleProducts => <ProductBox name={saleProducts.name} category={saleProducts.category} price={saleProducts.price} img={saleProducts.img} />)
            }
        </div>
    )
}

export default FeaturedBoxes