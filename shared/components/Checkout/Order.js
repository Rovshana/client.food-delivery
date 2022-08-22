import React from "react";
import { useSelector } from "react-redux";

function Order(props) {
  const state = useSelector((state) => state.BasketSlices);
  return (
    <div className="orderContainer container ">
      <h4 className="ordertitle">Your Order</h4>

      <div className="orderHeight">
        {state.myBasket.map((item) => (
          <div key={item.id} className="orderParent">
            <span className="orderContent1">
              {item.count} x {item.name}
            </span>
            <span className="orderPrice">$ {item.price}</span>
          </div>
        ))}
      </div>

      <span className="spanBorder"></span>
      <div className="orderParent">
        <span className="total">Total</span>
        <span className="price">{state.result}</span>
      </div>
    </div>
  );
}
export default Order;
