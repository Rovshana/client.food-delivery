import React from 'react'
import Checkout from '../../shared/components/Checkout/Checkout'
import ProfileSidebar from '../../shared/components/Profile/ProfileSidebar'

 function CheckoutContainer(props) {
    

    return (
        <>
        <div className='container d-flex'>
            <div className='col-3'>
                <ProfileSidebar/>

            </div>
            <div className='col-6'>
                <Checkout/>
            </div>
            <div className='col-3'>
                
            </div>
        </div>
            
        </>
    )
}
export default CheckoutContainer