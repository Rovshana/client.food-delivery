import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usersApi } from "../api/login";
import LoginContainer from "../features/Login/LoginContainer";
import { setUsers } from "../store/slices/LoginSlices";

function Login({res}) {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setUsers(res.Users))
  })
  return <LoginContainer />;
}

export async function getStaticProps() {
  const res = await usersApi.then(res=>res.data)
  if (res) {
    return {
      props: {
        res,
      },
    }
  }
  else{
    return {
      props: {
        res:"Gelmedi"
      },
    }
  }
}


export default Login;
