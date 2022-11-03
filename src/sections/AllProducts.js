import React from 'react'
import ProductBox from '../components/ProductBox'

const AllProducts = ({ products }) => {
    return (
        <>
            <div className="container all">
                <div className="all-products">
                    {
                        products.map((products, index) => <ProductBox key={index} product={products} />)
                    }
                </div>
            </div>

        </>
    )
}

export default AllProducts