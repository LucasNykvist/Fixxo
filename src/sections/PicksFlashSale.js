import React from 'react'
import FlashSale from '../components/FlashSale'
import TopPicks from '../components/TopPicks'

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