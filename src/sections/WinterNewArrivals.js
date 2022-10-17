import React from 'react'
import NewArrivals from '../components/NewArrivals'
import WinterClearance from '../components/WinterClearance'

const WinterNewArrivals = () => {
    return (
        <div className='WinterClearance-NewArrivals'>
            <div className='container'>
                <WinterClearance />
                <NewArrivals />
            </div>
        </div>
    )
}

export default WinterNewArrivals