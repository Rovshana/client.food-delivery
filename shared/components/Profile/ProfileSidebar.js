import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
 function ProfileSidebar(props) {
    const route = useRouter()
    

    return (
        <>
        <div className='profileSidebar profileSidebarMobile'>
            <div className='myDiv'>
                <Image width='22' height='14' src='/profile/profile.svg' alt='...' className='profilePhoto'/>
                <p className='Profileparagraph' onClick={()=>route.push("/profile")}>Profile</p>
            </div>
            <div className='myDiv'>
                <Image width='22' height='18' src='/profile/basket.svg' alt='...'/>
                <p  className='Profileparagraph' onClick={()=>route.push("/basket")}>Your basket</p>
            </div>
            <div className='myDiv'>
                <Image width='22' height='18' src='/profile/basket.svg' alt='...'/>
                <p  className='Profileparagraph'onClick={()=>route.push("/orders")} >Your Orders</p>
            </div>
            <div className='myDiv'>
                <Image width='22' height='18' src='/profile/basket.svg' alt='...'/>
                <p  className='Profileparagraph' onClick={()=>route.push("/checkout")}>Checkout</p>
            </div>
            <div className='myDiv'>
                <Image width='22' height='18' src='/profile/basket.svg' alt='...'/>
                <p  className='Profileparagraph' onClick={()=>route.push("/logout")}>Logout</p>
            </div>
        </div>
            
        </>
    )
}
export default ProfileSidebar