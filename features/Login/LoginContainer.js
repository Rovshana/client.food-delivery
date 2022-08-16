import {
  DropdownItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import  LoginHeader  from "../../shared/components/Login/LoginHeader";
import LoginBody from "../../shared/components/Login/LoginBody";
const lngs = {
  az: { nativeName: "Az" },
  en: { nativeName: "En" },
  fr: { nativeName: "Fr" },
};

function LoginContainer() {
  const [topbarIsOpen] = useState(true);
  const [search, setSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  const { t, i18n } = useTranslation();
  return (
    <div className="container-fluid my-3 login-base" style={{overflowY:"hidden"}}>
        <LoginHeader/>
        <LoginBody />
        
    </div>
  );
}

export default LoginContainer;
