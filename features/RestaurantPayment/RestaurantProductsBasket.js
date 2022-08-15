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
  setBasketDelete,
  setBasketUpdate,
  setResult,
} from "../../store/slices/BasketSlices";
import { useEffect } from "react";
function RestaurantProductsBasket() {
  const state = useSelector((state) => state.BasketSlices.myBasket);
  const result = useSelector((state) => state.BasketSlices.result);
  
  const dispatch = useDispatch();

  useEffect(() => {
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

  const deleteProduct = (name) => {
    let arr = state.filter((item) => item.name !== name);
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
          <SelectBasketProduct key={item.name}>
            <img src={`/restaurant/products/${item.image}`} alt="" />
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

      <button style={{ background: state.length > 0 && "red" }}>
        Checkout
        <span style={{ color: state.length > 0 && "red" }}>${result}</span>
      </button>
    </>
  );
}

export default RestaurantProductsBasket;
