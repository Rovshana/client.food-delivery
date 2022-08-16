import styled from "styled-components";

export const Label = styled.label`
display: flex;
font-family: 'Mukta';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 24px;
color: #4F4F4F;

`

export const Title = styled.h2`
font-family: 'Mukta';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 24px;
color: #4F4F4F;
padding-top: 43px;
padding-left: 37px;
padding-bottom: 23px;
`
export const Input = styled.input`
/* width: 444px; */
width: 90%;
margin-bottom: 25px;
height: 53px;
background: #FFFFFF;
border-radius: 4px;
border: none;

&::placeholder{
    padding-left: 15px;
}

`

export const InputRadio = styled.input`
background: #FFFFFF;
border: 1px solid #6FCF97;
border-radius: 100px;
width: 30px;
height: 30px;


`
export const LabelRadio = styled.label`
display: inline-block;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #6FCF97;
margin-left: 10px;
margin-bottom: 52px;



`
export const Button = styled.button`
width: 90%;
height: 53px;
background: #6FCF97;
border-radius: 4px;
border: none;
color: #FFFFFF;
`