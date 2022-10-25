import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

const ProductDetailsView = ({ products }) => {

    const params = useParams(products)

    return (
        <>
            <Navbar />
            <div className='container mt-5'>
                <h1>{params.id}</h1>
                <p>{params.products}</p>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetailsView