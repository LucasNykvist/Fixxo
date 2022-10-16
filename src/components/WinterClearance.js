import React from 'react'
import Button from './Buttons/Button'
import image from '../assets/images/winterClearance.png'

const WinterClearance = () => {
    return (
        <div className='Winter-clearance'>
            <div className='wc-info'>
                <h1>Winter Clearance Up to 70% Off!</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
                <Button />
            </div>

            <img src={image} />
        </div>
    )
}

export default WinterClearance