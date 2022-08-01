import React from "react";
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
  return (
    <div className="container ">
      <div>
        <Title>Features</Title>
        <Para>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Para>
      </div>
      <ParentDiv className="row">
        <ChildBox className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <ImageHolder>
            <img src="/rovsane/card1.svg" alt="" />
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
            <img src="/card2.svg" alt="" />
          </ImageHolder>
          <div>
            <CardTitle>Fresh healthy Food</CardTitle>
            <CardP>
              Lorem ipsum is placeholder commonly used in the graphic{" "}
            </CardP>
          </div>
        </ChildBox>
        {/* third */}
        <ChildBox className="col-xs-12 col-sm-12 col-md-12-bg-dark col-lg-4">
          <ImageHolder>
            <img src="/card3.svg" alt="" />
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
