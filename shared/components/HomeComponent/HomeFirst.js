import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

import {
  Title,
  Content,
  Button1,
  Button2,
  ImageKeeper,
  Box,
  Header,
  BoxImg,
  ButtonBox,
  Burger,
  Pizza,
  French,
  CheeseBurg,
} from "./HomeFirst.styled";
import { motion } from "framer-motion";
import { Nav } from "../Navbar/Navbar.styled";
import { useTranslation } from "react-i18next";
function HomeFirst(props) {
  const { t } = useTranslation();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  //  console.log(width);
  return (
    <Header>
      <Navbar />
      <Box className="container">
        <div>
          <Title>{t("common.header title")}</Title>
          <Content>{t("common.header desc")}</Content>
          <ButtonBox>
            <Button1>{t("common.order_now")}</Button1>
            <Button2> {t("form.register")}</Button2>
          </ButtonBox>
        </div>
        <BoxImg>
          <ImageKeeper>
            <img
              src={`${width > 576 ? "/burger.svg" : "/burgerResp.svg"}`}
              alt="."
            />
          </ImageKeeper>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="pizzaHome"
          >
            <img src="/pizza.svg" alt="pizza" />
            <p>Pizza Hut Yummy ...</p>
          </motion.div>
          {width > 576 && (
            <>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="french"
              >
                <img src="/french.svg" alt="" />
                <p>French Fries Yummy ...</p>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="cheeseBurg"
              >
                <img src="/cheesburg.svg" alt="" />
                <p>Cheesburger Yummy ...</p>
              </motion.div>
            </>
          )}
        </BoxImg>
      </Box>
    </Header>
  );
}
export default HomeFirst;
