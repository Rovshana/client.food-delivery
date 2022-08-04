import React from "react";
import Navbar from '../Navbar/Navbar'
function HowitWorks(props) {
  return (
    <div className="container">
        <Navbar/>
    <div className="parent">
      <div className="contentDiv">
        <h3 className="title">How it works</h3>
        <p className="content"> 
          Delivery may be extended during sale periods. Please refer to the
          checkout page for an updated estimate for your location. Kindly note
          that once you have placed an order, it is no longer possible to modify
          your order. Taxes and duties are included in all product prices.It is
          possible to place an order with shipment to a different address than
          your home or billing address when paying with a credit card. Please
          note that Klarna payments require that your order is shipped to your
          registered home address.
        </p>
      </div>
      <div>
        <img src="/How/delivery.svg" alt=".." />
      </div>
    </div>
    </div>
  );
}
export default HowitWorks;
