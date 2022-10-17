import React from 'react'
import { NavLink } from 'react-router-dom'

const BagIcon = (props) => {
    return (
        <NavLink to="/shoppingcart" end>
            <i class="fa-light fa-bag-shopping">
                <span className='badge rounded-circle'>{props.badge}</span>
            </i>
        </NavLink>
    )
}

export default BagIcon