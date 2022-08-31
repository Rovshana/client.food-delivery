import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
  /* padding-top: 20px; */

  /* width: 86%; */
  height: 120px;

  background: rgba(243, 244, 246, 1);

  /* border: 1px solid orange; */
  /* margin-top: 50px; */
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    height: 80px;
  }
`;
export const Ul = styled.ul`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 200px;
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    display: ${(props) => (props.hamburger === true ? "flex" : "none")};
    flex-direction: column;
    justify-content:flex-start;
    align-items: flex-start;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 9999;
    width: 77%;
 
    & img{
      padding: 15px 0;
      margin-right: 15px;
      /* margin-bottom: 35px; */
    }
    & button{
      /* width: 100%; */
    margin: 20px auto;
    margin-bottom: 55px;

    }
  }
`;

export const ListLi = styled.li`
  list-style: none;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #828282;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    color: #d63626;
  }
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    margin-bottom: 10px;
   
    &:last-child{
      margin-top: ${props=>props.logout ? "40px" : "0"};
    }
  }
`;

export const LangSignDiv = styled.div`
  display: flex;
position: relative;

  & img {
    margin-right: 15px;
  }
`;

export const BasketDiv = styled.div`
  position: relative;

  & span {
    background: red;
    width: 25px;
    text-align: center;
    color: white;
    border-radius: 100px;
    position: absolute;
    top: -10px;
    right: 0;
  }
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    display: none;
  }
`


export const Button2 = styled.button`
  width: 115px;
  height: 41px;
  border-radius: 30px;
  background-color: #d63626;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border: none;
`

export const ProfileNav = styled.div`
  width: 40px;
  height: 40px;
  /* width: 40px; */
  /* height: 40px; */
  background: #f178b6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 0 !important;
    color: #ffffff;
  }
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    display: none;
  }
`


export const ProfileMenu = styled.div`
position: absolute;
right: -30px;
padding: 20px 25px;
width: 180px;

top: 60px;
background: #FFFFFF;
box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
z-index: 50;

& p{
  font-size: 18px;
  color: #000000;
}
`