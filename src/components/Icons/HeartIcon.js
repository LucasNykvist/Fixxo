import React from 'react'
import { NavLink } from 'react-router-dom'

const HeartIcon = () => {
    return (
        <NavLink to="/wishlist" end><i class="fa-light fa-heart"></i></NavLink>
    )
}

export default HeartIcon