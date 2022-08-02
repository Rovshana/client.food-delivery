
import styled from "styled-components"

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 50px;
border: 1px solid orange;


`
export const Ul = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;

`

export const List = styled.li`
list-style: none;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
color: #828282;
margin-right: 15px;
:nth-child(1){
color: #D63626;
;
}
`

export const Button1 = styled.button`
width: 41px;
height: 41px;
border-radius: 20px;
margin-right: 27px;


`
export const Button2 = styled.button`
width: 115px;
height: 41px;
border-radius: 30px;
background-color: #D63626;
color:  #FFFFFF;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
border: none;
`