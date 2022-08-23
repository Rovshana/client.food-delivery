import React from "react";
import Navbar from '../Navbar/Navbar'
import {useState, useEffect} from "react"
import { useTranslation } from "react-i18next";
function HowitWorks(props) {
  const {t} = useTranslation();
  const [width, setWidth]  = useState(0)
useEffect(() => {
    setWidth(window.innerWidth)
}, [])
  console.log(width)
  return (
    <div className="container">
        {/* <Navbar/> */}
    <div className="parent">
      <div className="contentDiv">
        <h3 className="title titleMedia">{t("common.how it works")}</h3>
        <p className="content contentMedia"> 
         {t("common.how it works desc")}
        </p>
      </div>
      <div className="imgDiv">
        <img src={`${width > 576 ? '/how/delivery.svg' : "/how/deliveryMedia.svg"}`}  />
      </div>
    </div>
    </div>
  );
}
export default HowitWorks;
