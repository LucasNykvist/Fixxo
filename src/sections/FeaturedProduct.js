import React, { useState } from 'react'
import ProductBox from '../components/ProductBox'



const FeaturedProduct = ({ title }) => {

    const [products, setProducts] = useState([
        { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://fr.kicksmaniac.com/zdjecia/2020/11/14/211/47/NIKE_AIR_JORDAN_1_RETRO_HIGH_OG_ROYAL_TOEs-mini.jpg?mini" },
        { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://hu.basketzone.net/zdjecia/2022/08/14/808/15/NIKE_AIR_JORDAN_1_RETRO_HIGH_OG_WMNS_COURT_PURPLEs-mini.jpg?mini" },
        { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://es.basketzone.net/zdjecia/2021/08/07/808/17/NIKE_AIR_JORDAN_1_RETRO_HIGH_85_NEUTRAL_GREYs-mini.jpg?mini" },
        { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://it.kicksmaniac.com/zdjecia/2021/03/17/903/28/NIKE_AIR_JORDAN_1_RETRO_HIGH_OG_VOLT_GOLDs-mini.jpg?mini" },
    ])

    return (
        <div className='featured-product'>
            <div className='container'>
                <div className='product-header'>
                    <h1>{title}</h1>
                </div>


                <div className='product-boxes'>
                    {
                        products.map(product => <ProductBox name={product.name} category={product.category} price={product.price} img={product.img} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct