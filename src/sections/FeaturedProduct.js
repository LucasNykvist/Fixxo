import React from 'react'
import ProductBox from '../components/ProductBox'

const FeaturedProduct = () => {
    return (
        <div className='featured-product'>
            <div className='container'>
                <div className='product-header'>
                    <h1>Featured Product</h1>
                </div>

                <div className='product-boxes'>
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct