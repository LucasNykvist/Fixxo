import React from 'react'
import { NavLink } from 'react-router-dom'

const HeartIcon = (props) => {
    return (
        <NavLink to="/wishlist" end>
            <i class="fa-light fa-heart">
                <span className='badge rounded-circle'>{props.badge}</span>
            </i>
        </NavLink >
    )
}

export default HeartIcon