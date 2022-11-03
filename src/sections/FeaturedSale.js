import React from 'react'
import BigBox from '../components/BigBox'
import ProductBox from '../components/ProductBox'



const FeaturedSale = ({ products }) => {


    return (
        <div className='featured-sale'>
            <div className='container'>
                <BigBox price="2 FOR USD $29" />
                <div className="featured-boxes">
                    {
                        products.map((products, index) => <ProductBox key={index} product={products} />)
                    }
                </div>


            </div>
        </div>
    )
}

export default FeaturedSale