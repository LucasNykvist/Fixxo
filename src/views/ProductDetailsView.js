import React from 'react'
import { useParams } from 'react-router-dom'
import DetailedProduct from '../sections/DetailedProduct'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

const ProductDetailsView = ({ products }) => {



    return (
        <>
            <Navbar />
            <DetailedProduct product={products} />
            <Footer />
        </>
    )
}

export default ProductDetailsView