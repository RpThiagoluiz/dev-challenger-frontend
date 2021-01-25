import styled from "styled-components";

export const Container = styled.div`
  overflow-y: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 25px;
  margin-top: 30px;

  > h1 {
    font-size: 48px;
    color: #d75745;

    &:after {
      content: "";
      display: block;
      margin-top: 2px;
      width: 100%;
      border-bottom: 2px solid #394d5c;
    }
  }

  > a {
    > button {
      width: 220px;
      height: 64px;

      background-color: #f9bb4b;
      color: #d75745;

      font-size: 18px;
      padding: 5px;

      border-radius: 12px;
      box-shadow: 2px 2px 2px black;

      transition: all ease-in 0.4s;
    }

    &:hover {
      > button {
        background-color: #d75745;
        color: #d3d1b6;
      }
    }
  }
`;

export const Main = styled.div`
  grid-area: MN;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  margin: 60px;
`;

export const Footer = styled.div`
  background-color: #f9bb4b;

  padding: 25px;
  margin: 0 25px;
  border-radius: 12px;
`;
