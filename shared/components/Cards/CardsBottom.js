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

function CardsBottom(props) {
  return (
    <div className="container ">
      <div>
        <Title>Our Popular Update New Foods</Title>
        <Para>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Para>
      </div>
      <ParentDiv className="row">
        <ChildBox className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <ImageHolder>
            <img src="/cardsBottom/doublechees.svg" alt="" />
          </ImageHolder>
          <div>
            <CardTitle>Dubble Cheese</CardTitle>
            <CardP>
              Lorem ipsum is placeholder commonly used in the graphic{" "}
            </CardP>
          </div>
        </ChildBox>
        {/* second */}
        <ChildBox className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <ImageHolder>
            <img src="/cardsBottom/pizza.svg" alt="" />
          </ImageHolder>
          <div>
            <CardTitle>Margarita</CardTitle>
            <CardP>
              Lorem ipsum is placeholder commonly used in the graphic{" "}
            </CardP>
          </div>
        </ChildBox>
        {/* third */}
        <ChildBox className="col-xs-12 col-sm-12 col-md-12-bg-dark col-lg-4 ">
          <ImageHolder>
            <img src="/cardsBottom/kfc.svg" alt="" />
          </ImageHolder>
          <div>
            <CardTitle>Twister Menu</CardTitle>
            <CardP>
              Lorem ipsum is placeholder commonly used in the graphic{" "}
            </CardP>
          </div>
        </ChildBox>
      </ParentDiv>
    </div>
  );
}

export default CardsBottom;