import React from 'react'
import Navbar from '../sections/Navbar'

const NotFoundView = () => {
    window.top.document.title = "Not Found | Fixxo"
    return (
        <>
            <Navbar />
            <h1 className='d-flex justify-content-center p-5'>404 - PAGE NOT FOUND</h1>
        </>
    )
}

export default NotFoundView