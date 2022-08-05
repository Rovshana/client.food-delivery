import { useFormik } from "formik";
import { MyFrom } from "../Login.styled";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersApi, usersPostApi } from "../../../../api/login";
import { setUsers } from "../../../../store/slices/LoginSlices";
function FormDiv({ pathname }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.LoginSlices.users);
  // console.log(state);
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const val = {
        id: Date.now(),
        ...values,
      };
      usersPostApi(val).then((res) => {
        if (res.status === 201) {
          let data = [...state, val];
          dispatch(setUsers(data))
        }
      });
    },
  });
  return (
    <MyFrom onSubmit={formik.handleSubmit}>
      {pathname === "/register" && (
        <div className="form-group mb-3">
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.fullname}
          />
        </div>
      )}
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
      </div>

      {pathname === "/register" && (
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
      )}
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
        {show ? (
          <VisibilityIcon
            onClick={() => {
              setShow(!show);
            }}
            className="passwordIcon"
          />
        ) : (
          <VisibilityOffIcon
            onClick={() => setShow(!show)}
            className="passwordIcon"
          />
        )}
      </div>

      <button type="submit">
        {pathname === "/register" ? "Register" : "Login"}
      </button>
    </MyFrom>
  );
}

export default FormDiv;
