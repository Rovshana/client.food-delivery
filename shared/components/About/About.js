import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
function About(props) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="container">
      <div className="about-main">
        <div className="about-left">
          <h2 className="title">About Us</h2>
          <p className="content">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
        </div>
        <div className="about-right">
          {width > 576 ? (
            <img src="/about/photo.svg" alt=".." className="photoBackground" />
          ) : (
            <img
              src="/about/mobileBack.svg"
              alt=".."
              className="photoBackground"
            />
          )}
          <motion.div
            // animate={{ scale: [1, 1.1, 1] }}
            // transition={{
            //   duration: 3,
            //   repeat: Infinity,
            // }}
            className="burger"
          >
            <img src="/about/hamburger.svg" alt=".." className="photo" />

            <h3 className="title">Hamburger</h3>
            <img src="/star.svg" alt="" />
            <h4>$5.90</h4>
          </motion.div>
          {width > 576 && (
            <>
              <motion.div
                // animate={{ scale: [1, 1.1, 1] }}
                // transition={{
                //   duration: 3,
                //   repeat: Infinity,
                // }}
                className="coffee"
              >
                <img src="/about/coffee.svg" className="photo" />
                <h3 className="title">Papa Coffer</h3>
                <img src="/star.svg" alt="" />
                <h4>$1.40</h4>
              </motion.div>
              <motion.div
                // animate={{ scale: [1, 1.1, 1] }}
                // transition={{
                //   duration: 3,
                //   repeat: Infinity,
                // }}
                className="pizza"
              >
                <img src="/about/pizza.svg" className="photo" />
                <h3 className="title">Sousage Pizza</h3>
                <img src="/star.svg" alt="" />
                <h4>$7.90</h4>
              </motion.div>
            </>
          )}
          <motion.div
            // animate={{ scale: [1, 1.1, 1] }}
            // transition={{
            //   duration: 3,
            //   repeat: Infinity,
            // }}
            className="soup"
          >
            <img src="/about/soup.svg" className="photo" />
            <h3 className="title">Sousage Pizza</h3>
            <img src="/star.svg" alt="" />
            <h4>$7.90</h4>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default About;
