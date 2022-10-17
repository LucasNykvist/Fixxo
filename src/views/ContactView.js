import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import LocationMap from '../components/LocationMap'
import Map from '../components/LocationMap'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

const ContactsView = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb icon="fa-solid fa-house" where="Contacts" />
            <LocationMap />
            <Footer />
        </>
    )
}

export default ContactsView