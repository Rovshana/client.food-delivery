import styled from "styled-components";
 export const Main = styled.div`

 `
 export const TitleProfile = styled.h2`
 font-family: 'Mukta';
font-style: normal;
font-weight: 600;
font-size: 30px;
color: #4F4F4F;
padding-bottom: 30px;


 `
export const Label = styled.label`
color: #4F4F4F;
display: flex;
font-family: 'Mukta';
font-style: normal;
font-weight: 600;
font-size: 18px;
/* line-height: 24px; */
`
export const LabelEmail = styled.label`
color: #4F4F4F;
display: flex;
font-family: 'Mukta';
font-style: normal;
font-weight: 600;
font-size: 18px;
padding-top: 75px;
@media screen and (min-width: 320px)  and (max-width: 576px){
    padding-top: 0px;
}
`

export const Form = styled.form`
background: #F3F4F6;

`
export const Input = styled.input`
/* width: 444px; */
width: 100%;
margin-bottom: 25px;
height: 53px;
background: #FFFFFF;
border-radius: 4px;
border: none;

&::placeholder{
    padding-left: 15px;
}
@media screen and (min-width: 320px) and (max-width: 576px){
    width: 286px;
    
}
`
export const Button = styled.button`
width: 40%;
height: 53px;
background: #6FCF97;
border-radius: 4px;
border: none;
 color: #FFFFFF;
@media screen and (min-width: 320px)  and (max-width: 576px){
    width: 287px;
}

`
