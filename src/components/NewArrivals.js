import React from 'react'
import Button from './Buttons/Button'
import Image from '../assets/images/newArrivals.png'

const NewArrivals = () => {
    return (
        <div className='new-arrivals'>
            <div className='na-info'>
                <h1>New Arrivals</h1>
                <Button link="/products" />
            </div>

            <img src={Image} />

        </div>
    )
}

export default NewArrivals