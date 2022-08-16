import React from 'react'
import ProfileSidebar from '../Profile/ProfileSidebar'
import { Checked } from './Checked'

export function ReciveOrder(props) {
    

    return (
        <div className='container'>
            <div className="col-3">
                <ProfileSidebar/>
                </div>
            {/* //Order has recieved */}
                <div className='col-9'>
                    <Checked/>
                   

                </div>
        
        </ div>
    )
}
