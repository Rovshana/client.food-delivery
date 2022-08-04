import styled from "styled-components";

export const Center = styled.div`
  margin-bottom: 60px;
  & img{
    width: 100%;
  }
  @media only screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;
    margin-bottom: 200px;
    & img {
      width: 100%;
    }
  }
`;
