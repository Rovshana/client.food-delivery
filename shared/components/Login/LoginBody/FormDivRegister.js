import { useFormik } from "formik";
import { MyFrom } from "../Login.styled";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersApi, usersPostApi } from "../../../../api/login";
import { loginHandle } from "../../../../store/slices/LoginSlices";
import { register } from "../../../../firebase.js";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
function FormDiv({ value }) {
  const { t}  = useTranslation();
  const route = useRouter();
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      fullname: "",
      password: "",
    },
    onSubmit: async (values) => {
      const user = await register(values.email, values.password);
      if (user) {
        dispatch(loginHandle({user,values}));
        route.push("/");
      }
    },
    validate: (values) => {
      let errors = {};
      if (!values.username) {
        errors.username = "Required!";
      }
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
        <label htmlFor="fullname">{t("form.fullName")}</label>
        <input
          id="fullname"
          name="fullname"
          type="text"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.fullname}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="username">{t("form.username")}</label>
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

        <VisibilityOffIcon
          onClick={() => {
            setShow(!show);
          }}
          className="passwordIcon"
        />
      </div>

      <button type="submit">{t("form.register")}</button>
    </MyFrom>
  );
}

export default FormDiv;
