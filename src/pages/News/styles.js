import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 60px 1fr 70px;

  grid-template-areas:
    "HD"
    "MN"
    "FT";
`;

export const Header = styled.div`
  grid-area: HD;
  background-color: red;

  padding: 20px;
`;

export const Main = styled.div`
  grid-area: MN;
  background-color: blue;
`;

export const Footer = styled.div`
  grid-area: FT;
  background-color: yellow;
`;
