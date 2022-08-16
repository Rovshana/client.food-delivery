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
      <div className="container d-flex">
        <div className="col-3">
          <ProfileSidebar />
        </div>
        {!show ? (
          <>
            <div className="col-5">
              <Checkout changeShow={changeShow} />
            </div>
            <div className="col-3">
              <Order />
            </div>
          </>
        ) : (
          <div className="col-9">
            <Checked />
          </div>
        )}
      </div>
    </>
  );
}
export default CheckoutContainer;
