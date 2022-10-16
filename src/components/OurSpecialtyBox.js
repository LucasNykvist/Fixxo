import React from 'react'

const OurSpecialtyBox = (props) => {
    return (
        <div className='specialty-box'>
            <div className='box-text'>
                <h3>{props.text}</h3>
                <a href='#'>Get Started ></a>
            </div>
            <div className='box-image'></div>
        </div>
    )
}

export default OurSpecialtyBox