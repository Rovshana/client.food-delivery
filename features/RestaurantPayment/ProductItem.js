import { ProductItemStyle } from "./RestaurantPayment.styled";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasket } from "../../store/slices/BasketSlices";
import { basketPostApi } from "../../api/basket";
function ProductItem({ value }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.BasketSlices.myBasket);
  const selectProduct = (item) => {
    let arr = [];
    state.map((item) => {
      arr.push(item.name);
    });

    if (!arr.includes(item.name)) {
      basketPostApi(item).then((res) => {
        if (res.status === 201) {
          dispatch(setBasket(item));
        }
      });
    }
  };
  return (
    <>
      {value?.products?.map((item) => (
        <ProductItemStyle key={item.name}>
          <Image
            src={`/restaurant/products/${item.image}`}
            width={57}
            height={53}
            alt=""
          />
          <div>
            <p>{item.name}</p>
            <p>{item.desc}</p>
          </div>
          <span>
            From <b>{item.price}$</b>
          </span>
          <button onClick={() => selectProduct(item)}>
            <img src="/restaurant/add.svg" />
          </button>
        </ProductItemStyle>
      ))}
    </>
  );
}

export default ProductItem;
