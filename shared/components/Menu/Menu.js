import React from "react";
import { ContentMenu, ParentDiv, Title, PhotoDiv } from "./Menu.styled";

function Menu(props) {
  return (
    <>
      <ParentDiv>
        <div>
          <Title>Menu That Always Make You Fall In Love</Title>
          <ContentMenu>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </ContentMenu>
        </div>
        <PhotoDiv>
          <img src="/menu1.svg" alt=".." />
        </PhotoDiv>
      </ParentDiv>
      <ParentDiv>
        <PhotoDiv>
          <img src="/menu2.svg" alt=".." />
        </PhotoDiv>
        <div>
          <Title>Yummy Always Papa John’s Pizza.Agree?</Title>
          <ContentMenu>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </ContentMenu>
        </div>
      </ParentDiv>
      <ParentDiv>
        <div>
          <Title>Do You Like French Fries? Mmm...</Title>
          <ContentMenu>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </ContentMenu>
        </div>
        <PhotoDiv>
          <img src="/menu3.svg" alt=".." />
        </PhotoDiv>
      </ParentDiv>
    </>
  );
}

export default Menu;
