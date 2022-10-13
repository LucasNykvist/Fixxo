import React from 'react'
import flashSaleImg from '../assets/images/flashSale.png'
import ButtonFlashSale from './Buttons/ButtonFlashSale'

const FlashSale = () => {
    return (
        <div className='flash-sale'>
            <div className='flash-info'>
                <h1>Let's Be Conscious</h1>
                <ButtonFlashSale className="btn-flash" />
            </div>
            <img className='flash-sale-image' src={flashSaleImg} alt="s" />
        </div>
    )
}

export default FlashSale