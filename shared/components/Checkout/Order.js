import React from "react";

function Order(props) {
  return (
    <div className="orderContainer container ">
      <h4 className="ordertitle">Your Order</h4>
      <div className="orderParent ">
      
        <span className="orderContent1 ">1  x Papa John’s Pizza Restaurant</span>
        <span className='orderPrice'>$8.00</span>
      </div>
      <div className="orderParent">
                <span className="orderContent1">2  x Papa Coffee</span>
                <span className='orderPrice'>$3.80</span>
            </div>
            <div className="orderParent">
                
                <span className="orderContent1">2  x Coca Cola</span>
                <span className='orderPrice'>$6.00</span>
            </div>
            < div className="orderParent">
                
          <span className="orderContent1">2  x Coca Cola</span>
              <span className='orderPrice'>$6.00</span>
            </div>
            <div>

        <div className="orderParent">
        <span className="orderContent1">1  x Papa John’s Pizza Restaurant</span>
        <span className='orderPrice'>$8.00</span>
        </div>
      </div>
      <span className="spanBorder"></span>
      <div className="orderParent">
        <span className="total">Total</span>
        <span className="price">$17.80</span>
      </div>
    </div>
  );
}
export default Order;
