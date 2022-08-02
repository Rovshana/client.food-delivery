import styled from "styled-components";
export const Header = styled.header`
background-color: #F3F4F6;
margin-top: 30px;
margin-left: 30px;
margin-right: 37px;
border-radius: 4px;
margin-bottom: 81px;
height: 838px;
/* @media only  screen and (max-width: 768px){
    width: 100%;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    
} */

`

export const Title = styled.h1`
width: 653px;
height: 155px;
color: #181617;
font-weight: 900;
font-size: 55px;
line-height: 70px;
margin-bottom: 5px;
letter-spacing: 0.03em;
@media  only screen and (min-width: 320px) and  (max-width: 576px){
   
    width: 279px;
height: 90px;

font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: 20px;
line-height: 24px;
    
}

`
export const Content = styled.p`
width: 510px;
height: 105px;
font-weight: 400;
font-size: 22px;
line-height: 30px;
color: #828282;
@media  only screen and (min-width: 320px) and  (max-width: 576px){
    display: none;
    
}

`

export const Button1 = styled.button`
width: 220px;
height: 70px;
background: #D63626;
border-radius: 30px;
border: none;
color: #FFFFFF;
font-weight: 500;
font-size: 25px;
margin-right: 39px;
@media screen and (min-width: 320px) and (max-width: 576px){
    width: 168px;
height: 40px;

font-weight: 500;
font-size: 16px;
line-height: 24px;
margin-bottom: 12px;
    
}


`
export const Button2 = styled.button`
width: 220px;
height: 70px;
border-radius: 30px;
border: none;
font-weight: 500;
font-size: 25px;
color: #828282;
@media screen and (min-width: 320px) and (max-width: 576px){
    width: 168px;
height: 39px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
    
}
`
export const ImageKeeper = styled.div`

border: 1px solid black;
/* background: url(4-40662_transparent-background-burger-png-png-download-removebg-preview.png), url(4-40662_transparent-background-burger-png-png-download-removebg-preview.png), url(4-40662_transparent-background-burger-png-png-download-removebg-preview.png), url(4-40662_transparent-background-burger-png-png-download-removebg-preview.png); */
width: 529px;
height: 476px;
background-color: black;
border-radius: 100px; //
@media  only screen and (min-width: 320px) and  (max-width: 576px){
    
    background-color: transparent;
    width: 271px;
height: 231px;
}




`
export const BoxImg = styled.div`
 width: 657px;
height: 559px;
margin-left: 50px;
`


export const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media  only screen and (min-width: 320px) and  (max-width: 576px){
    flex-direction: column-reverse;
    
}

`

export const  ButtonBox = styled.div`
@media screen and (min-width: 320px) and (max-width: 576px){
    display: flex;
flex-direction: column;

    
}
`
export const Burger = styled.img`
 @media screen and (min-width: 320px)and(max-width: 576px){
    width: 271px;
height: 231px;
// question number1
    
 }
`