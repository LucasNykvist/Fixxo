import React from 'react'
import Logo from '../assets/images/Logo.svg'
import BagIcon from '../components/Icons/BagIcon'
import HeartIcon from '../components/Icons/HeartIcon'
import SearchIcon from '../components/Icons/SearchIcon'
import ShuffleIcon from '../components/Icons/ShuffleIcon'
import { NavLink } from 'react-router-dom'
import NavIcon from '../components/Icons/NavIcon'

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
                    <NavIcon icon="fa-solid fa-magnifying-glass position-relative" link="/search" />
                    <NavIcon icon="fa-light fa-code-compare position-relative" link="/compare" />
                    <NavIcon icon="fa-light fa-heart position-relative" link="/wishlist" value="1" />
                    <NavIcon icon="fa-light fa-bag-shopping position-relative" link="/shoppingcart" value="3" />
                </div>
            </div>
        </nav >
    )
}

export default Navbar