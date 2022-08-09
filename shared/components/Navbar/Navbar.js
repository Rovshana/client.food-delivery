import React, { useEffect } from "react";
import {
  Button1,
  Button2,
  LangSignDiv,
  ListLi,
  Nav,
  ProfileNav,
  Ul,
} from "./Navbar.styled";
import {
  DropdownItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useRouter } from "next/router";
const lngs = {
  az: { nativeName: "Az" },
  en: { nativeName: "En" },
  fr: { nativeName: "Fr" },
};

function Navbar(props) {
  const [myLocal, setMyLocal] = useState();
  useEffect(() => {
    setMyLocal(window.localStorage.getItem("user"));
  }, []);
  console.log(myLocal);
  const [topbarIsOpen] = useState(true);
  const [search, setSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  const { t, i18n } = useTranslation();
  const navUserName = () => {
    let myArr = [];
    let arr = myLocal
      .split(" ")
      .filter((item) => myArr.push(item.charAt(0).toUpperCase()));
    return myArr;
  };
  // router
  const route = useRouter();

  return (
    <>
      <Nav className="container">
        <div>
          <img src="/foody.svg" alt=".." />
        </div>
        <Ul>
          <ListLi onClick={() => route.push("/")}>Home</ListLi>
          <ListLi onClick={() => route.push("/restaurants")}>
            Restaurants
          </ListLi>
          <ListLi onClick={() => route.push("/about")}>About us</ListLi>
          <ListLi onClick={() => route.push("/howitworks")}>
            How it works{" "}
          </ListLi>
          <ListLi onClick={() => route.push("/faqs")}>FAQs </ListLi>
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
          {myLocal && <img src="/login/sebet.svg" />}

          {!myLocal ? (
            <Button2>Sign up</Button2>
          ) : (
            <ProfileNav>
              <p>{navUserName().join("")}</p>
            </ProfileNav>
          )}
        </LangSignDiv>
      </Nav>
    </>
  );
}
export default Navbar;
