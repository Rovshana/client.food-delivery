import {
    DropdownItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
  } from "reactstrap";
  import { useTranslation } from "react-i18next";
  import { useState } from "react";
  import { LoginHeaderDiv } from "../Login.styled";
  const lngs = {
    az: { nativeName: "Az" },
    en: { nativeName: "En" },
    fr: { nativeName: "Fr" },
  };
  
  function LoginHeader() {
    const [topbarIsOpen] = useState(true);
    const [search, setSearch] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen((prevState) => !prevState);
    const { t, i18n } = useTranslation();
    return (
    
        <LoginHeaderDiv>
        <h1>Foody.</h1>
          <Dropdown
            className={`lang-btn ${search && "hide-item"}`}
            isOpen={isOpen}
            toggle={toggle}
          >
            <DropdownToggle style={{ background: "transparent !important" }}>
              <img
                src={`/menu/${i18n.resolvedLanguage}.svg`}
                alt={`/menu/${i18n.resolvedLanguage}.svg`}
              />{" "}
            </DropdownToggle>
            <DropdownMenu className="lang-dropdown">
              {Object.keys(lngs).map((lng) => (
                <DropdownItem
                  type="submit"
                  key={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                  disabled={i18n.resolvedLanguage === lng}
                >
                  <img src={`/menu/${lng}.svg`} alt={`/menu/${lng}.svg`} />
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </LoginHeaderDiv>
  
    );
  }
  
  export default LoginHeader;
  