import React from 'react'
import ProductBoxSmall from './ProductBoxSmall'

const ProductBoxesSmall = (props) => {
    return (
        <div className='product-boxes-small'>
            <h3>{props.title}</h3>
            <ProductBoxSmall />
            <ProductBoxSmall />
            <ProductBoxSmall />
        </div>
    )
}

export default ProductBoxesSmall