import styled from "styled-components";

export const FooterBox = styled.footer`
width: 100%;
 height: 385px;
 background: #181617;
 

`
export const FooterContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center !important;
justify-content: space-between;
position:relative;

transform: translate( -50% -50%);
height: 360px;
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

`
export const PTag = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #828282;
margin: 0 auto !important;
text-align: center;

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