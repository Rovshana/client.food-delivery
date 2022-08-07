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
import { motion } from "framer-motion"
import { Nav } from "../Navbar/Navbar.styled";
function HomeFirst(props) {
   const [width,setWidth] = useState(0)
   useEffect(()=>{
    setWidth(window.innerWidth);
   },[])

  //  console.log(width);
  return (
    <Header>
      <Navbar/>
      <Box className="container">
        <div>
          <Title>Our Food site makes it easy to find local food</Title>
          <Content>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Content>
          <ButtonBox>
            <Button1>Register</Button1>
            <Button2>Order now</Button2>
          </ButtonBox>
        </div>
        <BoxImg>
          <ImageKeeper>
          <img src={`${ width > 576 ? "/burger.svg" : "/burgerResp.svg"}`} alt="." />
          </ImageKeeper>
         
          <motion.div 
          animate={{scale: 1.2}} 
          transition={{
            duration:2,
            repeat:Infinity,
          }}
          className="pizza">
            <img src="/pizza.svg" alt="pizza" />
            <p>Pizza Hut Yummy ...</p>
          </motion.div>
       {width > 576 && (
        <>
           <motion.div
            animate={{scale: 1.2}} 
            transition={{
              duration:2,
              repeat:Infinity,
            }}
          className="french">
            <img src="/french.svg" alt="" />
            <p>French Fries Yummy ...</p>
          </motion.div>
          <motion.div 
            animate={{scale: 1.2}} 
            transition={{
              duration:2,
              repeat:Infinity,
            }}
          className="cheeseBurg">
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
