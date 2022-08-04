import React from "react";
import { Button1, Button2, LangSignDiv, ListLi, Nav, Ul } from "./Navbar.styled";
import {

  DropdownItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const lngs = {
  az: { nativeName: "Az" },
  en: { nativeName: "En" },
  fr: { nativeName: "Fr" },
};

function Navbar(props) {
  const [topbarIsOpen] = useState(true);
  const [search, setSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  const { t, i18n } = useTranslation();
  return (
    <>
      <Nav className="container">
        <div>
          <img src="/foody.svg" alt=".." />
        </div>
        <Ul>
          <ListLi>Home</ListLi>
          <ListLi>Restaurants</ListLi>
          <ListLi>About us</ListLi>
          <ListLi>How it works </ListLi>
          <ListLi>FAQs </ListLi>
        </Ul>
        <LangSignDiv>
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

          <Button2>Sign up</Button2>
          
        </LangSignDiv>
      </Nav>
    </>
  );
}
export default Navbar;
