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
// import Image from "next/image";
function RestaurantPaymentContainer() {
  return (
    <RestaurantPayment className="container">
      <RestaurantImage>
        <img src="/restaurants/papa.png" alt="" />
      </RestaurantImage>
      <RestaurantInformation>
        <RestaurantInformationLeft>
          <p>Papa John’s Pizza Restaurant</p>
          <p>19 Nizami street, Sabail, Baku</p>
        </RestaurantInformationLeft>
        <RestaurantInformationRight>
          <p>Cuisine</p>
          <p>pizza, drink, hotdog, sendvich, roll</p>
        </RestaurantInformationRight>
        <DeliveryDiv>
          <p>5$</p>
          <p>Delivery</p>
        </DeliveryDiv>
        <GoBackBtn>Go Back</GoBackBtn>
      </RestaurantInformation>
      <RestaurantProductsContainer>
        <RestaurantProducts>
          <h3>Products</h3>
          <ProductItem/>
        </RestaurantProducts>
        <RestaurantProductsCounter>
              <RestaurantProductsBasket/>
        </RestaurantProductsCounter>
      </RestaurantProductsContainer>
    </RestaurantPayment>
  );
}

export default RestaurantPaymentContainer;
