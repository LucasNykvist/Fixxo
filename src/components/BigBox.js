import React from 'react'
import ButtonFlashSale from './Buttons/ButtonFlashSale'

const BigBox = (props) => {
    return (
        <div className='big-box'>
            <h1>{props.price}</h1>
            <ButtonFlashSale />
        </div>
    )
}

export default BigBox