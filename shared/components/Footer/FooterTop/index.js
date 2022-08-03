import { Box, Button, FirstDiv, SecondDiv, Title } from "../footer.styled";

function FooterTop() {
  return (
    <div className="footer-top footer-top-mobile">
      <Box>
        <FirstDiv>
          <img src="/footerTop/pizza.svg" alt="" />
        </FirstDiv>
        <div>
          <Title>Discover Restaurants Near From you</Title>
          <Button>explore now</Button>
        </div>
        <SecondDiv>
            <img src="/footerTop/burger.svg" alt=""/>
        </SecondDiv>
      </Box>

    </div>
  );
}

export default FooterTop;
