import React from 'react'
import { useContext } from 'react'
import { productContext } from '../contexts/contexts'
import DetailedProduct from '../sections/DetailedProduct'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

const ProductDetailsView = ({ products }) => {

    window.top.document.title = "Product | Fixxo"


    return (
        <>
            <Navbar />
            <DetailedProduct product={products} />
            <Footer />
        </>
    )
}

export default ProductDetailsView