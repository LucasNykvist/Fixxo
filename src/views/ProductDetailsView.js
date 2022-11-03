import React from 'react'
import { useContext } from 'react'
import { productContext } from '../contexts/contexts'
import DetailedProduct from '../sections/DetailedProduct'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

const ProductDetailsView = () => {


    return (
        <>
            <Navbar />
            <DetailedProduct />
            <Footer />
        </>
    )
}

export default ProductDetailsView