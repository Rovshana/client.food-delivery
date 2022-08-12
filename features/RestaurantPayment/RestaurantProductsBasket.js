import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  BasketDiv,
  ItemsDiv,
  SelectBasketProduct,
  SelectBasketProductCounter,
  SelectBasketProductName,
} from "./RestaurantPayment.styled";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import {
  setBasket,
  setBasketDelete,
  setBasketUpdate,
} from "../../store/slices/BasketSlices";
import { useEffect, useState } from "react";
function RestaurantProductsBasket() {
  const [show, setShow] = useState(0);
  const state = useSelector((state) => state.BasketSlices.myBasket);
  const dispatch = useDispatch();

 
  const deleteProduct = (id) => {
    let arr = state.filter((item) => item.id !== id);
    dispatch(setBasketDelete(arr));
  };

  const increment = (id) => {
    let inc = true;
    dispatch(setBasketUpdate({ id, inc }));
  };

  const decrement = (id) => {
    let desc = true;
    dispatch(setBasketUpdate({ id, desc }));
  };

  return (
    <>
      <ItemsDiv>
        <img src="/restaurant/smallBasket.svg" />
        <span>{state.length !== 0 ? state.length : 0} items</span>
      </ItemsDiv>
      {state.length !== 0 ? (
        state.map((item) => (
          <SelectBasketProduct key={item.id}>
            <img src="/restaurant/burger.svg" alt="" />
            <SelectBasketProductName>
              <p>{item.name}</p>
              <p>$ {(item.price * item.count).toPrecision(3)}</p>
            </SelectBasketProductName>
            <SelectBasketProductCounter>
              <button disabled={item.count === item.stock && true} onClick={() => increment(item.id)}>
                <AddIcon />
              </button>
              <p>{item.count}</p>
              <button disabled={item.count === 1 && true} onClick={() => decrement(item.id)}>
                <RemoveIcon />
              </button>
            </SelectBasketProductCounter>
            <DeleteSweepIcon
              onClick={() => deleteProduct(item.id)}
              style={{ alignSelf: "flex-start" }}
            />
          </SelectBasketProduct>
        ))
      ) : (
        <BasketDiv>
          <Image src="/restaurant/basket.svg" width="300" height="300" />
          <p>Opps!</p>
          <p>Basket empty</p>
        </BasketDiv>
      )}

      <button style={{ background: state.length > 0 && "red" }}>
        Checkout
        <span style={{ color: state.length > 0 && "red" }}>$0.00</span>
      </button>
    </>
  );
}

export default RestaurantProductsBasket;
