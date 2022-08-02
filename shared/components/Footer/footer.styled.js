import styled from "styled-components";

export const FooterBox = styled.footer`
width: 100%;
position: relative;
 height: 385px;
 background: #181617;
 @media only screen and (max-width: 768px) {
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
height: 360px;
@media only screen and (max-width: 768px) {
        /* For mobile phones: */
       display: flex;
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
 @media only screen and (max-width: 768px) {
        /* For mobile phones: */
       display: none;

      
    
    }

 :nth-child(1){
    font-family: 'Montserrat';
font-style: normal;
font-weight: 900;
font-size: 18px;
color: #FFFFFF;
 }

`
export const PTag = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #828282;
margin: 0 auto !important;
text-align: center;
@media only screen and (max-width: 768px) {
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