import { FormikConsumer } from 'formik'
import React from 'react'
import AllProducts from '../sections/AllProducts'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

const ProductsView = ({ products }) => {
    return (
        <>
            <Navbar />
            <AllProducts products={products} />
            <Footer />
        </>
    )
}

export default ProductsView