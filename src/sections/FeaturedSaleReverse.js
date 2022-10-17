import React from 'react'
import BigBox from '../components/BigBox'
import FeaturedBoxes from '../components/FeaturedBoxes'

const FeaturedSaleReverse = () => {
    return (
        <div className='featured-sale-reverse'>
            <div className='container'>
                <FeaturedBoxes />
                <BigBox price="2 FOR USD $49" />
            </div>
        </div>
    )
}

export default FeaturedSaleReverse