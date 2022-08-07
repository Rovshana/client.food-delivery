import {
  FormBtns,
  LoginBodyDiv,
  LoginBodyLeft,
  LoginBodyRight,
  LoginBtn,
  LoginFormDiv,
  LoginImageDiv,
  RegisterBtn,
} from "../Login.styled";
import { useRouter } from "next/router";
import FormDiv from "./FormDiv";
function LoginBody() {
  const handleClick = (e)=>{
    console.log(e.target.innerText);
  }
  const route = useRouter();
  return (
    <LoginBodyDiv>
      <LoginBodyLeft>
        <LoginImageDiv>
          <img src={`${route.pathname === "/login" ? "/login/loginImage.svg" : route.pathname === "/register" ? "/login/registerImage.svg" :"" }`} />
        </LoginImageDiv>
      </LoginBodyLeft>
      <LoginBodyRight>
      <LoginFormDiv>
      <FormBtns>
        <LoginBtn  onClick={(e)=>handleClick(e)} >Login</LoginBtn>
        <RegisterBtn onClick={(e)=>handleClick(e)}>Register</RegisterBtn>
      </FormBtns>
      <FormDiv/>
    </LoginFormDiv>
      </LoginBodyRight>
    </LoginBodyDiv>
  );
}

export default LoginBody;
