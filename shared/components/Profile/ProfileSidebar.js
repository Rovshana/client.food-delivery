import React from 'react'
import Image from 'next/image'
 function ProfileSidebar(props) {
    

    return (
        <>
        <div>
            <div>
                <Image width='22' height='14' src='/profile/profile.svg' alt='...'/>
                <p>profile</p>
            </div>
            <div>
                <Image width='22' height='18' src='/profile/basket.svg' alt='...'/>
                <p>Your basket</p>
            </div>
            <div>
                <Image width='22' height='18' src='/profile/basket.svg' alt='...'/>
                <p>Your Orders</p>
            </div>
            <div>
                <Image width='22' height='18' src='/profile/basket.svg' alt='...'/>
                <p>Checkout</p>
            </div>
            <div>
                <Image width='22' height='18' src='/profile/basket.svg' alt='...'/>
                <p>Logout</p>
            </div>
        </div>
            
        </>
    )
}
export default ProfileSidebar