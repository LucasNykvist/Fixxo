import React from 'react'

const Breadcrumb = (props) => {
    return (
        <div className='breadcrumb'>
            <div className='container'>
                <i className={props.icon}></i>
                {props.where}
            </div>
        </div>
    )
}

export default Breadcrumb