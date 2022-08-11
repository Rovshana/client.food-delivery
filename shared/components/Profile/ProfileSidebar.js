import React from 'react'
import Image from 'next/image'
 function ProfileSidebar(props) {
    

    return (
        <>
        <div className='profileSidebar profileSidebarMobile'>
            <div className='myDiv'>
                <Image width='22' height='14' src='/profile/profile.svg' alt='...'/>
                <p className='paragraph'>Profile</p>
            </div>
            <div className='myDiv'>
                <Image width='22' height='18' src='/profile/basket.svg' alt='...'/>
                <p  className='paragraph'>Your basket</p>
            </div>
            <div className='myDiv'>
                <Image width='22' height='18' src='/profile/basket.svg' alt='...'/>
                <p  className='paragraph' >Your Orders</p>
            </div>
            <div className='myDiv'>
                <Image width='22' height='18' src='/profile/basket.svg' alt='...'/>
                <p  className='paragraph'>Checkout</p>
            </div>
            <div className='myDiv'>
                <Image width='22' height='18' src='/profile/basket.svg' alt='...'/>
                <p  className='paragraph'>Logout</p>
            </div>
        </div>
            
        </>
    )
}
export default ProfileSidebar