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
`;

export const RestaurantInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  border-bottom: 1px solid #E0E0E0;
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
  height: 600px;
`;

export const RestaurantProducts = styled.div`
  width: 60%;
  /* height: 600px; */
  overflow-y:auto;
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
`;

export const ProductItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  border-top: 1px solid #E0E0E0;

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
    background:#f3f4f6;
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
`;

export const RestaurantProductsCounter = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 40%;
overflow-y:auto;
padding: 10px 15px;
background: #F3F4F6;
box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
border-radius: 4px;

& button{
  background: #BDBDBD;
border-radius: 100px;
padding: 2px 2px 2px 25px;
border: none;
display: flex;
justify-content: space-between;
align-items: center;
color: #FFFFFF;
font-size: 16px;
margin-bottom: 23px;
  & span{
    width: 187px;
    padding: 15px;
    background: #FFFFFF;
border-radius: 100px;
color: #BDBDBD;
  }
}
`;



export const BasketDiv = styled.div`

margin: 0 auto;

& p{
  font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 500;
font-size: 40px;
text-align: center;
width: 295px;
margin-bottom: 0;
color: #BDBDBD;

}
`

export const ItemsDiv = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
padding:15px;
border-bottom: 1px solid #E0E0E0 ;

& img{
  margin-right: 10px;
}
`