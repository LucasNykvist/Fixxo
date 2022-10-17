import React from 'react'
import Logo from '../assets/images/Logo.svg'
import BagIcon from '../components/Icons/BagIcon'
import HeartIcon from '../components/Icons/HeartIcon'
import SearchIcon from '../components/Icons/SearchIcon'
import ShuffleIcon from '../components/Icons/ShuffleIcon'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='__navbar'>
            <div className='container d-flex justify-content-between'>
                <NavLink to="/">
                    <img src={Logo} alt='' />
                </NavLink>
                <div className='nav-links'>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/categories" end>Categories</NavLink></li>
                    <li><NavLink to="/products" end>Products</NavLink></li>
                    <li><NavLink to="/contacts" end>Contacts</NavLink></li>
                </div>

                <div className='shopping-icons'>
                    <SearchIcon />
                    <ShuffleIcon />
                    <HeartIcon />
                    <BagIcon />
                </div>
            </div>
        </nav >
    )
}

export default Navbar