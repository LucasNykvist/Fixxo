import React from 'react'
import FlashSale from './FlashSale'
import TopPicks from './TopPicks'

const PicksFlashSale = () => {
    return (
        <div className='picksFlashSale'>
            <div className='container'>
                <TopPicks />
                <FlashSale />
            </div>
        </div>
    )
}

export default PicksFlashSale