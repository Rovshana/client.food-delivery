import { useFormik } from "formik";
import { MyFrom } from "../Login.styled";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersApi, usersPostApi } from "../../../../api/login";
import {useRouter} from "next/router"
import { login } from "../../../../firebase";
import { loginHandle } from "../../../../store/slices/LoginSlices";
import { useTranslation } from "react-i18next";
function FormDiv({ value }) {
  const route = useRouter();
  const [t] = useTranslation()
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
console.log(values);
      const user = await login(values.email,values.password);
      if (user) {
        dispatch(loginHandle({user,values}));
        route.push("/");
      }
    },

    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required!";
      } else if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
          values.email
        )
      ) {
        errors.email = "Invalid email format!";
      }

      return errors;
    },
  });
  return (
    <MyFrom onSubmit={formik.handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="email">{t("form.email")}</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password">{t("form.password")}</label>
        <input
          id="password"
          name="password"
          type={show ? "text" : "password"}
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>

      <button type="submit">{t("form.login")}</button>
    </MyFrom>
  );
}

export default FormDiv;
