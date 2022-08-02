import styled from "styled-components";

export const Title = styled.h2`

/* font-family: 'Roboto';
font-style: normal; */
font-weight: 900;
font-size: 40px;
line-height: 70px;
text-align: center;
margin: 0 auto;
color: #181617;

`
  
export const Para =styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 30px;
color: #828282;
margin: 0 auto;
text-align: center;
width: 780px;
height: 105px;


`
export const ChildBox = styled.div`
 width: 327px;
height: 386px;

/* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
filter: blur(4px); */
color: #FFFFFF;

`
export const ImageHolder = styled.div`
width: 241px;
height: 223px;
object-fit: cover;
margin: 0 auto;
 & img{
    width: 100%;
    height: 100%;
    display: block;
 }
`

export const CardTitle = styled.h3`
text-align: center;
font-weight: 700;
font-size: 30px;
line-height: 70px;
color: #4F4F4F;
`

export const CardP = styled.p`
text-align: center;
font-weight: 400;
font-size: 18px;
line-height: 30px;
color: #828282;

margin-bottom: 29px;
`

export const ParentDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
