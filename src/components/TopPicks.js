import React from 'react'
import ButtonLight from './Buttons/ButtonLight'
import topPicksImg from '../assets/images/topPick.png'



const TopPicks = () => {
    return (
        <div className='top-picks'>
            <img className='top-picks-image' src={topPicksImg} alt=".." />
            <div className='picks-info'>
                <h1>Pamela Reif's Top Picks</h1>
                <ButtonLight />
            </div>
        </div>
    )
}

export default TopPicks