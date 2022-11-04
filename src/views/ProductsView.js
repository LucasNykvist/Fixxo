import React from 'react'
import AllProducts from '../sections/AllProducts'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

const ProductsView = ({ products }) => {
    window.top.document.title = "Products | Fixxo"
    return (
        <>
            <Navbar />
            <AllProducts products={products} />
            <Footer />
        </>
    )
}

export default ProductsView