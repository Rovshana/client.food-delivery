import ProductItem from "./ProductItem";
import {
  DeliveryDiv,
  GoBackBtn,
  RestaurantImage,
  RestaurantInformation,
  RestaurantInformationLeft,
  RestaurantInformationRight,
  RestaurantPayment,
  RestaurantProducts,
  RestaurantProductsContainer,
  RestaurantProductsCounter,
} from "./RestaurantPayment.styled";
import RestaurantProductsBasket from "./RestaurantProductsBasket";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function RestaurantPaymentContainer() {
  const [data, setData] = useState({});
  const [width, setWidth] = useState(0)
  const route = useRouter();
  const state = useSelector((state) => state.RestaurantSlice.restaurants);

  useEffect(() => {
    setWidth(window.innerWidth)
    let arr = state.filter((item) => item.name === route.query.name);
    setData(arr[0]);
  }, [state,route.query.name]);

  return (
    <RestaurantPayment className="container">
      <RestaurantImage>
        <img src={`/restaurant/${data?.image}`} alt="" />
      </RestaurantImage>
      <RestaurantInformation>
        <RestaurantInformationLeft>
          <p>{data?.name}</p>
          <p>{data?.street}</p>
        </RestaurantInformationLeft>
        <RestaurantInformationRight>
          <p>Cuisine</p>
          <p>{data?.cuisine?.join(",")}</p>
        </RestaurantInformationRight>
        <DeliveryDiv>
          <p>{data?.delivery}$</p>

          <p>Delivery</p> 
        </DeliveryDiv>
        {width > 576 && (
          <GoBackBtn>Go Back</GoBackBtn>
        )}
      </RestaurantInformation>
      <RestaurantProductsContainer>
        <RestaurantProducts>
          <h3>Products</h3>

          <ProductItem value={data} />
        </RestaurantProducts>
        <RestaurantProductsCounter>
          <RestaurantProductsBasket />
        </RestaurantProductsCounter>
      </RestaurantProductsContainer>
    </RestaurantPayment>
  );
}

export default RestaurantPaymentContainer;
