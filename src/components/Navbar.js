import React from 'react'
import Logo from '../assets/images/Logo.svg'
import BagIcon from './Icons/BagIcon'
import HeartIcon from './Icons/HeartIcon'
import SearchIcon from './Icons/SearchIcon'
import ShuffleIcon from './Icons/ShuffleIcon'

const Navbar = () => {
    return (
        <nav className='__navbar'>
            <div className='container d-flex justify-content-between'>
                <img src={Logo} alt='' />
                <div className='nav-links'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contacts</a></li>
                </div>

                <div className='shopping-icons'>
                    <SearchIcon />
                    <ShuffleIcon />
                    <HeartIcon />
                    <BagIcon />
                </div>
            </div>
        </nav>
    )
}

export default Navbar