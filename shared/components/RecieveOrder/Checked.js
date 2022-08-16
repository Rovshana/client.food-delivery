import React from 'react'
import Image from 'next/image'
export function Checked(props) {
    

    return (
       
            <div className='checkoutTrue'>
                <div className='checkContainer'>
                <Image src="/checkout/true.svg" width="200" height="200" alt=".." />
                
                </div>
                <div className='checkparagraphDiv'>
                <p className='paragraph'>Your order has been received</p>
                </div>
            </div>
       
    )
}
