import React from 'react'
import { ProfileMenu } from '../../shared/components/Navbar/Navbar.styled'
import Orders from '../../shared/components/Orders/Orders'
import ProfileSidebar from '../../shared/components/Profile/ProfileSidebar'
import ProfileSideBar from '../../shared/components/Profile/ProfileSidebar'

 function OrdersContainer(props) {
    

    return (
        <div className='container d-flex ordersMobile'>
            <div  className='col-3'>
                <ProfileSidebar/>

            </div>
            <div className='col-9'>
            <Orders/>
            </div>

           
        </div>
    )
}
export default OrdersContainer