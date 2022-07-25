import React from "react";
import {
  Content,
  Title,
  CardBox,
  ImageKeeper,
  CardContent,
  CardTitle,
  ImageKeeper3,
  Column
} from "./Cards.styled";

function Card(props) {
  return (
    <>
      <div className="container">
        <div>
          <Title>Features</Title>
          <Content>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Content>
        </div>
        <div className="row">
          <Column className="col-xl-3">
            <CardBox>
              <ImageKeeper>
                <img src="/card1.svg" alt=".." />
              </ImageKeeper>
              <div>
                <CardTitle>Discount Boucher</CardTitle>
                <CardContent>
                  Lorem ipsum is placeholder commonly used in the graphic{" "}
                </CardContent>
              </div>
            </CardBox>
          </Column>
          <Column className="col-xl-3">
            <CardBox>
              <ImageKeeper>
                <img src="/card2.svg" alt=".." />
              </ImageKeeper>
              <div>
                <CardTitle>Fresh healthy Food</CardTitle>
                <CardContent>
                  Lorem ipsum is placeholder commonly used in the graphic{" "}
                </CardContent>
              </div>
            </CardBox>
          </Column>
          <Column className="col-xl-3">
            <CardBox>
              <ImageKeeper3>
                <img src="/card3.svg" alt=".." />
              </ImageKeeper3>
              <div>
                <CardTitle>Fast Home Delivery</CardTitle>
                <CardContent>
                  Lorem ipsum is placeholder commonly used in the graphic{" "}
                </CardContent>
              </div>
            </CardBox>
          </Column>
        </div>
        
      </div>
    </>
  );
}
export default Card;
