import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

const ProductDetailsView = () => {

    const params = useParams()

    return (
        <>
            <Navbar />
            <div className='container mt-5'>
                <h1>{params.id}</h1>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetailsView