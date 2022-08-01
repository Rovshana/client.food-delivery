import styled from "styled-components";

export const Title = styled.h1`
font-style: normal;
font-weight: 900;
font-size: 55px;
line-height: 70px;
margin-left: 106px;
margin-right: 30px;
letter-spacing: 0.03em;
@media only screen and (max-width:768px) {
    margin: 0 auto ; 

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 31px;
width: 233px;
text-align: center;
margin-bottom: 20px;

background-color: blue;
&:nth-last-child(){
    color: pink;
}

}
    
    


`
export const ContentDiv = styled.div`
width: 60%;
height: 530px;
margin-right: 80px;
@media only screen and (max-width:768px) {
    width: 30%;
    
    margin: 0 auto;
    
    }

`
export const ContentMenu = styled.p`

font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 30px;
color: #828282;
margin-right: 85px;
margin-top: 30px;
margin-left: 111px;

@media only screen and (max-width:768px) {
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 28px;
text-align: center;
margin: 0 auto;
width: 291px;

background-color: yellow;

}

`
export const Box = styled.div`
margin-top: 281px;
margin-bottom: 200px;
`
export const ParentDiv =  styled.div`
display: flex;
align-items: center;
margin-bottom: 100px;
@media only screen and (max-width:768px) {
    flex-direction: column;
    :nth-child(2){
        flex-direction: column-reverse;
    }
}
`

export const PhotoDiv = styled.div`
/* margin-top: 200px; */
width: 40%;
/* border: 1px solid orange; */
@media only screen and (max-width: 768px) {
        /* For mobile phones: */
       width: 20%;
    
     
    
    }



`