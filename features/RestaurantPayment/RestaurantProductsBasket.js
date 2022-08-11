import Image from "next/image";
import { useSelector } from "react-redux";
import { BasketDiv, ItemsDiv } from "./RestaurantPayment.styled";

function RestaurantProductsBasket() {
  const state = useSelector((state) => state)
  console.log(state);
  return (
    <>
      <ItemsDiv>
        <img src="/restaurant/smallBasket.svg" />
        <span>0 items</span>
      </ItemsDiv>
      <BasketDiv>
        <Image src="/restaurant/basket.svg" width="300" height="300" />
        <p>Opps!</p>
        <p>Basket empty</p>
      </BasketDiv>

      <button>
        Checkout 
        <span>$0.00</span>
      </button>
    </>
  );
}

export default RestaurantProductsBasket;
