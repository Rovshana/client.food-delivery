import React, { useEffect } from "react";
import {
  BasketDiv,
  Button1,
  Button2,
  LangSignDiv,
  ListLi,
  Nav,
  ProfileMenu,
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
import { useSelector } from "react-redux";
const lngs = {
  az: { nativeName: "Az" },
  en: { nativeName: "En" },
  fr: { nativeName: "Fr" },
};

function Navbar(props) {
  const [profile,setProfile] = useState(false)
  const [hamburger, setHamburger] = useState(false);
  const [width, setWidth] = useState(0);
  const [myLocal, setMyLocal] = useState("");
  useEffect(() => {
    setMyLocal(window.localStorage.getItem("user"));
    setWidth(window.innerWidth);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  const { t, i18n } = useTranslation();
  const navUserName = () => {
    let myArr = [];
    let arr = myLocal
      ?.split(" ")
      .filter((item) => myArr.push(item.charAt(0).toUpperCase()));
    return myArr;
  };
  // router
  const route = useRouter();

 
  const state = useSelector((state) => state.BasketSlices.myBasket);


  return (
    <>
      <Nav className="container">
        {width < 576 && (
          <img
            src="hamburger.svg"
            alt="hamburger.svg"
            onClick={() => setHamburger(!hamburger)}
          />
        )}
        <div>
          <img src="/foody.svg" alt=".." />
        </div>
        <Ul hamburger={hamburger}>
          {width < 576 && (
            <>
            <img src="/cancel.svg" alt="" onClick={() => setHamburger(false)} />
            {!myLocal ? (
            <Button2>Sign up</Button2>
          ) : (
        <div style={{marginBottom:"15px", display: 'flex',justifyContent: 'space-around',alignItems: 'center'}}>
        <img src="/avatar.svg" alt=""/>
        <span>{myLocal}</span>
        </div>
             
              
          )}
            </>
          )}
          
        
          <ListLi onClick={() => route.push("/")}>Home</ListLi>
          <ListLi onClick={() => route.push("/restaurants")}>
            Restaurants
          </ListLi>
          <ListLi onClick={() => route.push("/about")}>About us</ListLi>
          <ListLi onClick={() => route.push("/howitworks")}>
            How it works
          </ListLi>
         {(myLocal && width < 576) && (
          <>
           <ListLi onClick={() => route.push("/howitworks")}>
            Profile
          </ListLi>
          <ListLi onClick={() => route.push("/howitworks")}>
            Your Basket
          </ListLi>
          <ListLi onClick={() => route.push("/howitworks")}>
            Your Orders
          </ListLi>
          <ListLi onClick={() => route.push("/howitworks")}>
            Chekcout
          </ListLi>
        
          </>
         )}
          <ListLi onClick={() => route.push("/faqs")}>FAQs </ListLi>
          {(myLocal && width < 576) && (
            <ListLi Logout onClick={() => route.push("/faqs")}>Logout </ListLi>
          )}

        </Ul>
        <LangSignDiv>
          <Dropdown className={`lang-btn`} isOpen={isOpen} toggle={toggle}>
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
          {myLocal && (
            <BasketDiv>

              <span>{state.length}</span>
              <img src="/login/sebet.svg" />
            </BasketDiv>
          )}


          {!myLocal && width > 576 ? (
            <Button2>Sign up</Button2>
          ) : (
            <>
            <ProfileNav onClick={() => setProfile(!profile)}>
              <p>{navUserName().join("")}</p>
            </ProfileNav>
          {profile && (
              <ProfileMenu>
              <p>Profile</p>
              <p>Your Basket</p>
              <p>Your Orders</p>
              <p>Checkout</p>
              <p>Logout</p>
            </ProfileMenu>
          )}
            </>
          )}
        </LangSignDiv>
      </Nav>
    </>
  );
}
export default Navbar;
