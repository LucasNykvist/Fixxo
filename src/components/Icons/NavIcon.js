import React from 'react'
import { NavLink } from 'react-router-dom'

const NavIcon = ({ link, icon, value, hideOnMobile }) => {
    return (
        <NavLink className={`nav-icon ${hideOnMobile ? "d-none d-md-flex" : ""}`} to={link} end>
            <i class={icon}><span className='badge rounded-pill'>{value}</span></i>
        </NavLink >
    )
}

export default NavIcon