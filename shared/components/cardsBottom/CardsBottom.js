import {
    Content,
    Title,
    CardBox,
    ImageKeeper,
    CardContent,
    CardTitle,
    ImageKeeper3,
    Column
  } from "./CardsBottom.styled";
 function CardsBottom(props) {
    

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
                <img src="/doublechees.svg" alt=".." />
              </ImageKeeper>
              <div>
                <CardTitle>Dubble Chees</CardTitle>
                <CardContent>
                  Lorem ipsum is placeholder commonly used in the graphic{" "}
                </CardContent>
              </div>
            </CardBox>
          </Column>
          <Column className="col-xl-3">
            <CardBox>
              <ImageKeeper>
                <img src="/pizza.svg" alt=".." />
              </ImageKeeper>
              <div>
                <CardTitle>Margarita</CardTitle>
                <CardContent>
                  Lorem ipsum is placeholder commonly used in the graphic{" "}
                </CardContent>
              </div>
            </CardBox>
          </Column>
          <Column className="col-xl-3">
            <CardBox>
              <ImageKeeper3>
                <img src="/kfc.svg" alt=".." />
              </ImageKeeper3>
              <div>
                <CardTitle>Twister Menu</CardTitle>
                <CardContent>
                  Lorem ipsum is placeholder commonly used in the graphic{" "}
                </CardContent>
              </div>
            </CardBox>
          </Column>
        </div>
        
      </div>
            
        </>
    )
}

export default CardsBottom