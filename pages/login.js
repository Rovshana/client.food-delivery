import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usersApi } from "../api/login";
import LoginContainer from "../features/Login/LoginContainer";
import { setUsers } from "../store/slices/LoginSlices";

function Login({ res }) {
 

  return <LoginContainer />;
}


export default Login;
