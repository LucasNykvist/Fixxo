import React from 'react'
import ProductBoxesSmall from '../components/ProductBoxesSmall'
import ProductBoxSmall from '../components/ProductBoxSmall'

const LatestBestTop = () => {
    return (
        <div className='latest-best-top'>
            <div className='container'>
                <ProductBoxesSmall title="Latest Product" />
                <ProductBoxesSmall title="Best Selling Product" />
                <ProductBoxesSmall title="Top Reacted Product" />
            </div>
        </div>
    )
}

export default LatestBestTop