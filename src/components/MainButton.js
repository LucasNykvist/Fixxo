import React from 'react'
import { NavLink } from 'react-router-dom'

const MainButton = (props) => {
    return (
        <NavLink className='main-button' to={props.link}>
            <div className='btn-left'></div>
            {props.text}
            <div className='btn-right'></div>
        </NavLink>
    )
}

export default MainButton