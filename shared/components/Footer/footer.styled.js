import styled from "styled-components";

export const FooterBox = styled.footer`
width: 100%;
position: relative;
 height: 385px;
 background: #181617;
 /* margin-top: 300px; */
 @media only screen and (min-width: 320px) and(max-width: 576px) {
        /* For mobile phones: */
       width: 100%;
       height: 424px;
      

      
    
    }


`
export const FooterContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center !important;
justify-content: space-between;
position:relative;

transform: translate( -50% -50%);
height: 365px;
@media only screen and (min-width: 320px)and (max-width: 576px) {
        /* For mobile phones: */
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;


      
    
    }
`

export const FooterIcons = styled.div`
/* display: flex ; */
& img{
    display: inline-block;
    
    &:not(:last-child){
        margin-right: 10px;
    }
}
`

export const List = styled.li`
font-weight: 400;
font-size: 13px;
 line-height: 25.5px;
 color: #828282;
 list-style: none;


 :nth-child(1){
    font-family: 'Montserrat';
font-style: normal;
font-weight: 900;
font-size: 18px;
color: #FFFFFF;
 }
 @media screen and (min-width: 320px)and (max-width: 576px){
    display: none;
    
}
`
export const PTag = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #828282;
margin: 0 auto !important;
text-align: center;
@media only screen and (min-width: 320px) and (max-width: 576px) {
        /* For mobile phones: */
    
        margin: 0 auto !important;

      
    
    }

`

// export const Child2 = styled.div`
// display: flex;
// justify-content: space-between;
// align-items: center;
// `

export const FooterP = styled.p`
width: 392px;
height: 105px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 30px;
color: #828282;
`



// footer top's style is here 
export const Box = styled.div`
display: flex;
justify-content: space-between;
position:relative;

transform: translate( -50% -50%);
height: 370px;
align-items: center;


`
export const Button = styled.button`
width: 220px;
height: 60px;
background: #FB9300;
border-radius: 30px;
border: none;
display: block;
margin: 0 auto;
// 
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
margin-top: 43px;
@media screen and (min-width: 320px)  and (max-width: 576px){
    width: 115.7px;
height: 40.06px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
    
}

`

export const Title = styled.h2`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 60px;
line-height: 70px;
color: #ffff;
width: 550px;
height: 120px;
text-align: center;
@media screen and (min-width: 320px) and (max-width: 576px){
    width: 200px;
height: 60px;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 31px;
text-align: center;
}

`

export const FirstDiv = styled.div`
margin-top: 96px;
margin-left: 51px;
margin-bottom: 73px;
@media screen and (min-width: 320px) and (max-width: 576px) {
    display: none;
    
}


`

export const SecondDiv = styled.div`
margin-top: 100px;
margin-right: 41px;
margin-bottom: 62px;
@media screen  and (min-width: 320px)and (max-width: 576px){
    display: none;
    
}


`


