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
import FormDivRegister from "./FormDivRegister";
import FormDivLogin from "./FormDivLogin";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
function LoginBody() {
  const [image,Setimage] = useState();
  const handleChange = ()=>{

  }
  const route = useRouter();
  return (
    <LoginBodyDiv>
      <LoginBodyLeft>
        <LoginImageDiv>
          <img
            src={`${
              route.pathname === "/login"
                ? "/login/loginImage.svg"
                : route.pathname === "/register"
                ? "/login/registerImage.svg"
                : ""
            }`}
          />
        </LoginImageDiv>
      </LoginBodyLeft>
      <LoginBodyRight>
        <LoginFormDiv>
          <Tabs
            defaultActiveKey="register"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab onClick={handleChange} eventKey="login" title="Login">
              <FormDivLogin/>
            </Tab>
            <Tab eventKey="register" title="Register">
              <FormDivRegister/>
            </Tab>
          </Tabs>
        </LoginFormDiv>
      </LoginBodyRight>
    </LoginBodyDiv>
  );
}

export default LoginBody;
