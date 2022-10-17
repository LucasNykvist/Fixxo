import React from 'react'
import BigBox from '../components/BigBox'
import FeaturedBoxes from '../components/FeaturedBoxes'

const FeaturedSale = () => {
    return (
        <div className='featured-sale'>
            <div className='container'>
                <BigBox price="2 FOR USD $29" />
                <FeaturedBoxes />
            </div>
        </div>
    )
}

export default FeaturedSale