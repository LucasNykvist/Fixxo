import React from 'react'
import { useContext } from 'react'
import BigBox from '../components/BigBox'
import FeaturedBoxes from '../components/FeaturedBoxes'
import ProductBox from '../components/ProductBox'
import ProductBoxSmall from '../components/ProductBoxSmall'
import { productContext } from '../contexts/contexts'


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