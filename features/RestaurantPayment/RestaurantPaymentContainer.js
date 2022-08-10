import {
  RestaurantImage,
  RestaurantInformation,
  RestaurantInformationLeft,
  RestaurantInformationRight,
  RestaurantPayment,
  RestaurantProducts,
  RestaurantProductsContainer,
  RestaurantProductsCounter,
} from "./RestaurantPayment.styled";
// import Image from "next/image";
function RestaurantPaymentContainer() {
  return (
    <RestaurantPayment className="container">
      <RestaurantImage>
        <img src="/restaurants/papa.png"  alt="" />
      </RestaurantImage>
      <RestaurantInformation>
      <RestaurantInformationLeft>

      </RestaurantInformationLeft>
      <RestaurantInformationRight>
        
        </RestaurantInformationRight>
      </RestaurantInformation>
      <RestaurantProductsContainer>
        <RestaurantProducts></RestaurantProducts>
        <RestaurantProductsCounter></RestaurantProductsCounter>
      </RestaurantProductsContainer>
    </RestaurantPayment>
  );
}

export default RestaurantPaymentContainer;
