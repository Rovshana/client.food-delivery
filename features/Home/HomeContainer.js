import React from "react";
import Cards from "../../shared/components/Cards/Cards";
import CardsBottom from "../../shared/components/Cards/CardsBottom";
import Footer from "../../shared/components/Footer/Footer";
import HomeFirst from "../../shared/components/HomeComponent/HomeFirst";

import Menu from "../../shared/components/Menu/Menu";

function HomeContainer(props) {
  return (
    <>
      <HomeFirst />
      <Cards />
      <Menu />
      <CardsBottom />
      
     
    </>
  );
}
export default HomeContainer;
