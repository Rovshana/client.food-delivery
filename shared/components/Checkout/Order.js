import React from 'react'

function Order(props) {
    

    return (
        <div className='orderContainer'>
            <h4 className='ordertitle'>Your Order</h4>
            <div className='orderParentofSpanS'>
                <span className='orderNum'>1</span>
                <span className="orderContent1">x Papa John’s Pizza Restaurant</span>
                <span className='orderPrice'>$8.00</span>
            </div>
    
            <div className='orderParentofSpanS'>
                <span className='orderNum'>2</span>
                <span className="orderContent1">x Papa Coffee</span>
                <span className='orderPrice'>$3.80</span>
            </div>
    
            <div className='orderParentofSpanS'>
                <span className='orderNum'>2</span>
                <span className="orderContent1">x Coca Cola</span>
                <span className='orderPrice'>$6.00</span>
            </div>
            <div className='orderParentofSpanS'>
                <span className='orderNum'>2</span>
                <span className="orderContent1">x Coca Cola</span>
                <span className='orderPrice'>$6.00</span>
            </div>
            <div className='orderParentofSpanS'>
                <span className='orderNum'>1</span>
                <span className="orderContent1">x Papa John’s Pizza Restaurant</span>
                <span className='orderPrice'>$8.00</span>
               
            </div>
           
    
        </div>
    )
}
export  default Order