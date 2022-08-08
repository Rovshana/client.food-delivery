import styled from "styled-components";

export const LoginHeaderDiv = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@500&display=swap");
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background: #EB5757;
border-radius: 4px;
height: 122px;

& h1{
    font-family: 'Mukta',sans-serif;
font-style: normal;
font-weight: 800;
font-size: 36px;
color: #FFFFFF;
margin-left: 36px;
}
`


export const LoginBodyDiv = styled.div`
display: flex;
margin-top: 20px;
width: 100%;

/* height: calc(100vh - 180px); */

`

export const LoginBodyLeft = styled.div`
width: 50%;
background: #EB5757;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
`

export const LoginImageDiv = styled.div`
     /* height: 700px; */
    
`

export const LoginBodyRight = styled.div`
     width: 50%;
   
`


// Right Form 

export const LoginFormDiv = styled.div`
    background: #DFE3EA;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormBtns = styled.div`
margin-top: 55px;
display: flex;
justify-content: center;
/* align-items: center; */

width: 100%;
`





export const MyFrom = styled.form`
width: 100%;
padding: 50px;

& input{
    background: #FFE7E7;
border-radius: 5px;
font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
padding: 17px 20px;
}
& label{
    font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 500;
font-size: 20px;
color: #4F4F4F;
margin-bottom: 10px;
}

& button{
    font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 500;
font-size: 22px;
    margin-top: 25px;
    width: 100%;
    border: none;
    background: #EB5757;
border-radius: 5px;
text-align: center;
color:#fff;
padding: 17px 0;
}

`