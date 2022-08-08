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
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
function LoginBody() {
  const [value, setValue] = useState("");
  const handleClick = (e) => {
    setValue(e.target.innerText);
  };
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
            defaultActiveKey="login"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="login" title="Login">
              <FormDiv  />
            </Tab>
            <Tab eventKey="register" title="Register">
              <FormDiv value="Register" />
            </Tab>
          </Tabs>
        </LoginFormDiv>
      </LoginBodyRight>
    </LoginBodyDiv>
  );
}

export default LoginBody;
