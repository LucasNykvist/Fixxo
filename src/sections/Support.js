import React from 'react'
import CustomerSupportIcon from '../components/SupportIcons/CustomerSupportIcon'
import SecuredPaymentIcon from '../components/SupportIcons/SecuredPaymentIcon'
import TruckIcon from '../components/SupportIcons/TruckIcon'

const Support = () => {
    return (
        <div className='support'>
            <div className='container'>
                <div className='support-info'>
                    <CustomerSupportIcon />
                    <h2>Customer Support</h2>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className='support-info'>
                    <SecuredPaymentIcon />
                    <h2>Secured Payment</h2>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className='support-info'>
                    <TruckIcon />
                    <h2>Free Home Delivery</h2>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className='support-info'>
                    <TruckIcon />
                    <h2>30 Day Reuters</h2>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
        </div>
    )
}

export default Support