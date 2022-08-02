import styled from "styled-components";
export const Header = styled.header`
background-color: #F3F4F6;
margin-top: 30px;
margin-left: 30px;
margin-right: 37px;
border-radius: 4px;
margin-bottom: 81px;
height: 838px;
@media only  screen and (max-width: 768px){
    width: 100%;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    
}

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

`
export const Content = styled.p`
width: 510px;
height: 105px;
font-weight: 400;
font-size: 22px;
line-height: 30px;
color: #828282;
@media  only screen and (max-width: 768px){
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


`
export const Button2 = styled.button`
width: 220px;
height: 70px;
border-radius: 30px;
border: none;
font-weight: 500;
font-size: 25px;
color: #828282;
`
export const ImageKeeper = styled.div`

border: 1px solid black;
/* background: url(4-40662_transparent-background-burger-png-png-download-removebg-preview.png), url(4-40662_transparent-background-burger-png-png-download-removebg-preview.png), url(4-40662_transparent-background-burger-png-png-download-removebg-preview.png), url(4-40662_transparent-background-burger-png-png-download-removebg-preview.png); */
width: 529px;
height: 476px;
background: black;
border-radius: 100px; //





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

`