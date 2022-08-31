import styled from "styled-components";
export const Header = styled.header`
  background-color: #f3f4f6;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 37px;
  border-radius: 4px;
  margin-bottom: 81px;
  height: 838px;
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    margin-left: 0;
  margin-right: 0;
    height: auto;
    margin-top: 0;
    margin-bottom: 24px;
    padding: 10px;
  }
`;

export const Title = styled.h1`
  width: 653px;
  height: 155px;
  color: #181617;
  font-weight: 900;
  font-size: 55px;
  
  margin-bottom: 15px;
  
 
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    width: 279px;
    height: 90px;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
  }
`;
export const Content = styled.p`
  width: 510px;
  height: 105px;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 42px;
  padding-top: 15px;
  padding-bottom: 20px;

  color: #828282;
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    display: none;
  }
`;

export const Button1 = styled.button`
  width: 220px;
  height: 70px;
  background: #d63626;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 25px;
  margin-right: 39px;
  @media screen and (min-width: 320px) and (max-width: 576px) {
    width: 168px;
    height: 40px;
    margin-right: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 12px;
  }
`;
export const Button2 = styled.button`
  width: 220px;
  height: 70px;
  border-radius: 30px;
  border: none;
  font-weight: 500;
  font-size: 25px;
  color: #828282;
  @media screen and (min-width: 320px) and (max-width: 576px) {
    width: 168px;
    height: 39px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;
export const ImageKeeper = styled.div`
  /* border: 1px solid black; */
  /* background-color: red; */
  width: 529px;
  height: 496px;
  border-radius: 100px;
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;
    height: auto;
    & img{
      width: 100%;
    
    }
    
  }
`;
export const BoxImg = styled.div`
 
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    flex-direction: column-reverse;
   
  }
`;

export const ButtonBox = styled.div`
  @media screen and (min-width: 320px) and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Burger = styled.img`
  /* position: absolute;
  top: -40px;
  left: 5px;
 
  object-fit: cover; */
`;
