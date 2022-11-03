import React from 'react'
import BigBox from '../components/BigBox'
import ProductBox from '../components/ProductBox'

const FeaturedSaleReverse = ({ products }) => {
    return (
        <div className='featured-sale-reverse'>
            <div className='container'>
                <div className="featured-boxes">
                    {
                        products.filter((products, index) => index > 8 && index < 13).map((products, index) => <ProductBox key={index} product={products} />)
                    }
                </div>
                <BigBox price="2 FOR USD $49" />
            </div>
        </div>
    )
}

export default FeaturedSaleReverse