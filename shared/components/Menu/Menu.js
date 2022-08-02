import React from "react";
import { ContentMenu, ParentDiv, Title, PhotoDiv, ContentDiv, Box } from "./Menu.styled";
import Image from "next/image";

function Menu(props) {
  return (
    <Box>
      <ParentDiv>
        <ContentDiv>
          <Title>Menu That Always Make You Fall In Love</Title>
          <ContentMenu>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </ContentMenu>
        </ContentDiv>
        <PhotoDiv>
          <Image width={413} height={530} src="/menu/menu1.svg" alt=".."  />
        </PhotoDiv>
      </ParentDiv>
      <ParentDiv>
        <PhotoDiv>
          <Image width={413} height={530} src="/menu/menu2.svg" alt=".." />
        </PhotoDiv>
        <ContentDiv>
          <Title>Yummy Always Papa John’s Pizza.Agree?</Title>
          <ContentMenu>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </ContentMenu>
        </ContentDiv>
      </ParentDiv>
      <ParentDiv>
        <ContentDiv>
          <Title>Do You Like French Fries? Mmm...</Title>
          <ContentMenu>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </ContentMenu>
        </ContentDiv>
        <PhotoDiv>
          <Image width={413} height={530} src="/menu/menu3.svg" alt=".."/>
        </PhotoDiv>
      </ParentDiv>
    </Box>
  );
}

export default Menu;
