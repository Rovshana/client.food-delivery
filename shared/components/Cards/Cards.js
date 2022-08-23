import React from "react";
import { useTranslation } from "react-i18next";
import {
  ChildBox,
  Para,
  Title,
  ImageHolder,
  CardTitle,
  CardP,
  ParentDiv,
} from "./Cards.styled";

function Cards(props) {
  const {t} = useTranslation();
  return (
    <div className="container ">
      <div>
        <Title>{t("common.features")}</Title>
        <Para>
        {t("common.features desc")}
        </Para>
      </div>
      <ParentDiv className="row">
        <ChildBox className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <ImageHolder>
            <img src="/cards/card1.svg" alt="" />
          </ImageHolder>
          <div>
            <CardTitle>Discount Boucher</CardTitle>
            <CardP>
              Lorem ipsum is placeholder commonly used in the graphic{" "}
            </CardP>
          </div>
        </ChildBox>
        {/* second */}
        <ChildBox className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <ImageHolder>
            <img src="/cards/card2.svg" alt="" />
          </ImageHolder>
          <div>
            <CardTitle>Fresh healthy Food</CardTitle>
            <CardP>
              Lorem ipsum is placeholder commonly used in the graphic{" "}
            </CardP>
          </div>
        </ChildBox>
        {/* third */}
        <ChildBox className="col-xs-12 col-sm-12 col-md-12-bg-dark col-lg-4 ">
          <ImageHolder>
            <img src="/cards/card3.svg" alt="" />
          </ImageHolder>
          <div>
            <CardTitle>Fast Home Delivery</CardTitle>
            <CardP>
              Lorem ipsum is placeholder commonly used in the graphic{" "}
            </CardP>
          </div>
        </ChildBox>
      </ParentDiv>
    </div>
  );
}

export default Cards;
