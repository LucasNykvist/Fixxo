import React from 'react'
import { NavLink } from 'react-router-dom'

const BagIcon = () => {
    return (
        <NavLink to="/shoppingcart" end><i class="fa-light fa-bag-shopping"></i></NavLink>
    )
}

export default BagIcon