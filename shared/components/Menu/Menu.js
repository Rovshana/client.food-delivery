import {useEffect, useState} from "react";
import { ContentMenu, ParentDiv, Title, PhotoDiv, ContentDiv, Box } from "./Menu.styled";
import Image from "next/image";
import { menuApi } from "../../../api/menu";

function Menu(props) {
  const [state, setState] = useState(null)
  useEffect(() => {
  getMenu()
  }, [])

  const getMenu = ()=>{
    menuApi.then(res =>{
      console.log(res.data.menu)
      setState(res.data.menu)
    })
  }
  return (
    <Box>
      <ParentDiv>
        <ContentDiv>
          <Title index1>Menu That Always Make You Fall In Love</Title>
          <ContentMenu>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </ContentMenu>
        </ContentDiv>
        <PhotoDiv>
          <Image width={413} height={530} src={`/menu/" `} alt=".."  />
        </PhotoDiv>
      </ParentDiv>
      <ParentDiv>
        <PhotoDiv>
          <Image width={413} height={530} src="/menu/menu2.svg" alt=".." />
        </PhotoDiv>
        <ContentDiv>
          <Title index2>Yummy Always Papa John’s Pizza.Agree?</Title>
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
          <Image width={413} height={530} src="/menu/menu3.svg" alt=".." className="imgMedia"/>
        </PhotoDiv>
      </ParentDiv>
    </Box>
  );
}

export default Menu;
