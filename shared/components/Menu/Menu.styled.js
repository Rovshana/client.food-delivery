import styled from "styled-components";

export const Title = styled.h3`
  font-style: normal;
  font-weight: 900;
  font-size: 55px;
  line-height: 70px;
  margin-left: 106px;
  margin-right: 30px;
  letter-spacing: 0.03em;
  /* @media only screen and (max-width:768px) {
    margin: 0 auto ; 

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 31px;
width: 233px;
text-align: center;
margin-bottom: 20px;



} */

  @media only screen and (min-width: 320px) and (max-width: 576px) {
    width: ${(props) =>
      props.index1 ? "233px" : props.index2 ? "248px" : "235px"};
    margin: 0 auto;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 31px;

    text-align: center;
    margin-bottom: 20px;
  }
`;
export const ContentDiv = styled.div`
  width: 60%;
  height: 530px;
  margin-right: 80px;
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;
    height: 250px;
    margin: 20px auto;
  }
`;
export const ContentMenu = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  color: #828282;
  margin-right: 85px;
  margin-top: 30px;
  margin-left: 111px;

  @media only screen and (min-width: 320px) and (max-width: 576px) {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    margin: 0 auto;
    width: 291px;
  }
`;
export const Box = styled.div`
  margin-top: 281px;
  margin-bottom: 200px;
  @media screen and (min-width: 320px) and (max-width: 576px) {
   margin-top: 120px;
  }
  
`;
export const ParentDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 70px;
  @media screen and (min-width: 320px) and (max-width: 576px) {
    flex-direction: column;
    :nth-child(2) {
      flex-direction: column-reverse;
    }
  }
`;

export const PhotoDiv = styled.div`
  /* margin-top: 200px; */
  width: 40%;
  
  margin-left: 20px;
  /* border: 1px solid orange; */
  @media screen and (min-width: 320px) and (max-width: 576px) {
    /* For mobile phones: */
    width: 20%;
  }
`;
