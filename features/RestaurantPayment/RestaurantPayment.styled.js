import styled from "styled-components";

export const RestaurantPayment = styled.div`
  margin-bottom: 50px;
  & p {
    /* margin-bottom: 5px !important; */
  }
`;

export const RestaurantImage = styled.div`
  width: 100%;
  height: 500px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 320px) and (max-width: 576px) {
    height: 168px;
  }
`;

export const RestaurantInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  border-bottom: 1px solid #e0e0e0;

  @media only screen and (min-width: 320px) and (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const RestaurantInformationLeft = styled.div`
  & p:first-child {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #4f4f4f;
  }

  & p:last-child {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #828282;
  }
`;

export const RestaurantInformationRight = styled.div`
  & p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #828282;
  }
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    & p {
      margin-bottom: 0;
    }
  }
`;

export const DeliveryDiv = styled.div`
  & p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #d63626;
  }
`;

export const GoBackBtn = styled.button`
  background: #d63626;
  border: 1px solid #d63626;
  border-radius: 5px;
  color: #ffffff;
  padding: 15px;
`;

export const RestaurantProductsContainer = styled.div`
  display: flex;
  /* height: 600px; */
  @media only screen and (min-width: 320px) and (max-width: 576px){
  flex-direction: column;

  } 
`;

export const RestaurantProducts = styled.div`
  width: 60%;
  height: 600px;
  overflow-y: auto;
  margin-right: 50px;
  background: #f3f4f6;
  border-radius: 4px;
  & h3 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    text-align: center;
    color: #4f4f4f;
    padding: 40px;
  }

  @media only screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;
  }
`;

export const ProductItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  border-top: 1px solid #e0e0e0;

  & div {
    & p:first-child {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      color: #4f4f4f;
    }
    & p:last-child {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #828282;
    }
  }

  & span {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #828282;
    & b {
      color: #000;
      font-weight: 800;
    }
  }

  & button {
    background: #f3f4f6;
    border: 2px solid #bdbdbd;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    &:focus {
      background: #6fcf97;
      border: 2px solid #6fcf97;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    padding: 5px;
    & div {
    & p:first-child {
      margin-bottom: 0;
      margin-left: 8px;
    }
    & p:last-child {
      margin-left: 8px;
    }
  }
  }
`;

export const RestaurantProductsCounter = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${props=>props.myBasket ? "99%" : "40%"};
  margin-left: ${props=>props.myBasket ? "15px" : "0"} ;
  overflow-y: auto;
  padding: 10px 15px;
  background: #f3f4f6;
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  & button {
    background: #bdbdbd;
    border-radius: 100px;
    padding: 2px 2px 2px 25px;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    font-size: 16px;
    margin-bottom: 23px;
    & span {
      width: 187px;
      padding: 15px;
      background: #ffffff;
      border-radius: 100px;
      color: #bdbdbd;
    }
  }
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #888;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(214, 54, 38);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(214, 54, 38);
  }

  @media only screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;
    & button{
      & span{
        padding: 5px;
      }
    }
  }
`;

export const BasketDiv = styled.div`
  margin: 0 auto;

  & p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    text-align: center;
    width: 295px;
    margin-bottom: 0;
    color: #bdbdbd;
  }
`;

export const ItemsDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  & img {
    margin-right: 10px;
  }
`;

export const SelectBasketProduct = styled.div`
  display: flex;
  justify-content: ${props=>props.myBasket ? "space-between":""};
  align-items: center;
  padding: 15px;
  & img {
    margin-right: 35px;
    width: ${props=>props.myBasket ? "68px":"50px"};
    border-radius: ${props=>props.myBasket ? "50px":""};
  }
  & p {
    margin-bottom: 0;
  }

  & button {
    padding: 0;
    color: #000;
    background: transparent;
    margin-bottom: 0;
    &:disabled {
      opacity: 0.2;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 576px) {
 
  }
`;

export const SelectBasketProductName = styled.div`
  width: 200px;
  margin-right: 35px;
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;
  }
`;
export const SelectBasketProductCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 35px;
`;
