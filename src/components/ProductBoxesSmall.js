import React from 'react'
import ProductBoxSmall from './ProductBoxSmall'

const ProductBoxesSmall = ({ products, title }) => {
    return (
        <div className='product-boxes-small'>
            <h3>{title}</h3>
            {
                products.filter((products, index) => index < 3).map((products, index) => <ProductBoxSmall key={index} product={products} />)
            }
        </div>
    )
}

export default ProductBoxesSmall