import React from 'react'
import { NavLink } from 'react-router-dom'

const SearchIcon = () => {
    return (
        <NavLink to='/search' end><i className="fa-solid fa-magnifying-glass" ></i></NavLink >
    )
}

export default SearchIcon