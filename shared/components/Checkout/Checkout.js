import React from "react";
import { useFormik } from "formik";
import {
  Input,
  Label,
  Title,
  Button,
  InputRadio,
  LabelRadio,
} from "./checkout.styled";
import { useDispatch, useSelector } from "react-redux";
import { checkoutApi } from "../../../api/checkout";
import { setCheckout } from "../../../store/slices/CheckoutSlice";

function Checkout(props) {
  const state = useSelector((state) => state.BasketSlices);
  const state2 = useSelector((state) => state);
  console.log(state2,"state2");
  const dispatch = useDispatch();
  const changeRadioValue = (e) => {
    formik.values.cash = e.target.value;
  };
  const formik = useFormik({
    initialValues: {
      deliveryAddress: "",
      contactNumber: "",
      cash: "",
    },
    onSubmit: (values) => {
      // checkoutApi(values).then((res) => {
      //   if (res.status === 201) {
      //     let arr = [state.myBasket, values];
      //     dispatch(setCheckout(arr));
          props.changeShow()
      //   }
      // });
     
    },
  });

  return (
    <div className="checkoutcontainer">
      <Title>Checkout</Title>
      <form onSubmit={formik.handleSubmit}>
        <div className="checkoutInfo">
          <Label htmlFor="deliveryAddress">Delivery Address</Label>
          <Input
            id="deliveryAddress"
            name="deliveryAddress"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.deliveryAddress}
          />
        </div>
        <div className="checkoutInfo">
          <Label htmlFor="contactNumber">Contact Number</Label>
          <Input
            id="contactNumber"
            name="contactNumber"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.contactNumber}
          />
        </div>
        <div className="orderRadio">
          <div className="checkoutForm">
            <InputRadio
              id="cash"
              name="cash"
              type="radio"
              onChange={(e) => changeRadioValue(e)}
              value="pay at the door"
            />
            <LabelRadio htmlFor="cash">pay at the door</LabelRadio>
          </div>
          <div className="checkoutForm">
            <InputRadio
              id="cash"
              name="cash"
              type="radio"
              onChange={(e) => {
                changeRadioValue(e);
              }}
              value="pay at the door by credit-cards"
            />

            <LabelRadio htmlFor="card">
              pay at the door by credit-cards
            </LabelRadio>
          </div>
        </div>
        <div className="checkoutInfo">
          <Button type="submit">Checkout</Button>
        </div>
      </form>
    </div>
  );
}
export default Checkout;
