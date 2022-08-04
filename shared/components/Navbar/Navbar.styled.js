
import styled from "styled-components"

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
margin-bottom: 20px;
width: 100%;
height: 50px;
/* border: 1px solid orange; */
/* margin-top: 50px; */


`
export const Ul = styled.ul`
padding-top: 10px;
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 200px;


`

export const ListLi = styled.li`
list-style: none;
font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
color: #828282;
margin-right: 15px;
&:hover{
color: #D63626;
;
}
`

export const LangSignDiv = styled.div`
display: flex;
margin-right:70px ;


`

export const Button2 = styled.button`
width: 115px;
height: 41px;
border-radius: 30px;
background-color: #D63626;
color:  #FFFFFF;
font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
border: none;
`