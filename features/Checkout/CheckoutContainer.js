import React, { useState } from "react";
import Checkout from "../../shared/components/Checkout/Checkout";
import Order from "../../shared/components/Checkout/Order";
import ProfileSidebar from "../../shared/components/Profile/ProfileSidebar";
import { Checked } from "../../shared/components/RecieveOrder/Checked";

function CheckoutContainer(props) {
  const [show, setShow] = useState(false);

  const changeShow = () => {
    setShow(true);
  };

  return (
    <>
      <div className="container d-flex checkoutMobile">
        <div className="col-lg-3 col-sm-12">
          <ProfileSidebar />
        </div>
        {!show ? (
          <>
            <div className="col-lg-5 col-sm-12">
              <Checkout changeShow={changeShow} />
            </div>
            <div className="col-lg-3 col-sm-12">
              <Order />
            </div>
          </>
        ) : (
          <div className="col-lg-9 col-sm-12">
            <Checked />
          </div>
        )}
      </div>
    </>
  );
}
export default CheckoutContainer;
