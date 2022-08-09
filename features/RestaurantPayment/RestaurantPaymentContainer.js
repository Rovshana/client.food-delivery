import {
  RestaurantImage,
  RestaurantInformation,
  RestaurantPayment,
  RestaurantProducts,
  RestaurantProductsContainer,
  RestaurantProductsCounter,
} from "./RestaurantPayment.styled";
import Image from "next/image";
function RestaurantPaymentContainer() {
  return (
    <RestaurantPayment>
      <RestaurantImage>
        <Image src="https://" width="300" height="300" alt="" />
      </RestaurantImage>
      <RestaurantInformation></RestaurantInformation>
      <RestaurantProductsContainer>
        <RestaurantProducts></RestaurantProducts>
        <RestaurantProductsCounter></RestaurantProductsCounter>
      </RestaurantProductsContainer>
    </RestaurantPayment>
  );
}

export default RestaurantPaymentContainer;
