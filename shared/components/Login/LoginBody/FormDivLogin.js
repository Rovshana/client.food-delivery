import { useFormik } from "formik";
import { MyFrom } from "../Login.styled";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersApi, usersPostApi } from "../../../../api/login";
import { setUsers } from "../../../../store/slices/LoginSlices";
import {useRouter} from "next/router"
function FormDiv({ value }) {
  const [showBtn, setShowBtn] = useState(false);
const route = useRouter();
  const state = useSelector((state) => state.LoginSlices.users);
  console.log(state);
  const [show, setShow] = useState(true);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {

        state.map(item=>{
            if (values.username.toLowerCase() === item.username.toLowerCase() && values.password === item.password) {
                
                route.push("/")
                localStorage.setItem("user",values.username);
            }
            else{
                console.log("giris ugursuzd");
            }
        })


    },

    validate: (values) => {
      let errors = {};
      if (!values.username) {
        errors.username = "Required!";
      }

      return errors;
    },
  });
  return (
    <MyFrom onSubmit={formik.handleSubmit}>
     
      <div className="form-group mb-3">
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          name="username"
          type="text"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username && (
          <div className="error">{formik.errors.username}</div>
        )}
      </div>

    
      <div className="form-group mb-3">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type={show ? "text" : "password"}
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

       
      </div>

      <button type="submit">Login</button>
    </MyFrom>
  );
}

export default FormDiv;
