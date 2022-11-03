import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ContactForm from '../components/ContactForm'
import LocationMap from '../components/LocationMap'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

const ContactsView = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb icon="fa-solid fa-house" where="Contacts" />
            <LocationMap />
            <ContactForm />
            <Footer />
        </>
    )
}

export default ContactsView