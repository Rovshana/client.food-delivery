import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  BasketDiv,
  ItemsDiv,
  SelectBasketProduct,
  SelectBasketProductCounter,
  SelectBasketProductName,
} from "../RestaurantPayment/RestaurantPayment.styled";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { setBasketUpdate, setResult } from "../../store/slices/BasketSlices";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function BasketProduct() {
  const [show, setShow] = useState(0);
  const state = useSelector((state) => state.BasketSlices.myBasket);
  const result = useSelector((state) => state.BasketSlices.result);
  const [width, setWidth] = useState(0);
  const dispatch = useDispatch();
  const route = useRouter();
  const [showBasket, setShowBasket] = useState(false);
  const deleteProduct = (id) => {
    let arr = state.filter((item) => item.id !== id);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    let arr = [];
    let result = 0;
    state.map((item) => {
      arr.push((item.price * item.count).toPrecision(3));
    });
    for (const item of arr) {
      result += +item;
    }
    dispatch(setResult(result.toPrecision(3)));
  }, [state]);

  // console.log(show);

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
      {(width > 576 || showBasket) && (
        <>
          <ItemsDiv>
            <img src="/restaurant/smallBasket.svg" />
            <span>{state.length !== 0 ? state.length : 0} items</span>
          </ItemsDiv>
          {state.length !== 0 ? (
            state.map((item) => (
              <SelectBasketProduct key={item.name}>
                <img src={`/restaurant/${item.image}`} alt="" />
                <SelectBasketProductName>
                  <p>{item.name}</p>
                  <p>$ {(item.price * item.count).toPrecision(3)}</p>
                </SelectBasketProductName>
                <SelectBasketProductCounter>
                  <button
                    disabled={item.count === item.stock && true}
                    onClick={() => increment(item.id)}
                  >
                    <AddIcon />
                  </button>
                  <p>{item.count}</p>
                  <button
                    disabled={item.count === 1 && true}
                    onClick={() => decrement(item.id)}
                  >
                    <RemoveIcon />
                  </button>
                </SelectBasketProductCounter>
                <DeleteSweepIcon
                  onClick={() => deleteProduct(item.name)}
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
        </>
      )}

      <button
        style={{ background: state.length > 0 && "red" }}
        onClick={() => setShowBasket(!showBasket)}
      >
        {width > 576 || showBasket ? "Checkout" : `${state.length} Items`}
        <span
          style={{ color: state.length > 0 && "red" }}
          onClick={() => route.push("/checkout")}
        >
          ${result}
        </span>
      </button>
    </>
  );
}

export default BasketProduct;
