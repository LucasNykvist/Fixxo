import React from 'react'
import { NavLink } from 'react-router-dom'

const NavIcon = (props) => {
    return (
        <NavLink className="nav-icon" to={props.link} end>
            <i class={props.icon}><span className='badge rounded-pill'>{props.value}</span></i>
        </NavLink >
    )
}

export default NavIcon