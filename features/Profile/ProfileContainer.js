import React from 'react'
import ProfileSidebar from '../../shared/components/Profile/ProfileSidebar'
import UserProfile from '../../shared/components/Profile/UserProfile'

 function ProfileContainer(props) {
    

    return (
        < div className='container d-flex'>
        <div className='col-3'>
            <ProfileSidebar/>

        </div>
        <div className='col-9'>
            <UserProfile/>
            
        </div>
            
        </ div>
    )
}
export default ProfileContainer