
import styled from "styled-components"

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
margin-bottom: 20px;
margin-top: 30px;



/* width: 86%; */
height: 120px;

background: rgba(243, 244, 246, 1);

/* border: 1px solid orange; */
/* margin-top: 50px; */

@media only screen and (min-width: 320px) and (max-width: 576px) {
   display: none;

    
  }
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
/* margin-right:70px ; */

& img{
  margin-right: 15px;
}

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

export const ProfileNav = styled.div`
width: 40px;
height: 40px;
/* width: 40px; */
/* height: 40px; */
background: #F178B6;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;

& p{
  font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 500;
font-size: 20px;
margin-bottom: 0 !important;
color: #FFFFFF;
}
`