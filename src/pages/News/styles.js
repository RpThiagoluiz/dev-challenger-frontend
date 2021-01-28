import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 50px;
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

export const NewContent = styled.div`
  width: 350px;
  min-height: 150px;

  display: flex;
  flex-direction: column;
  align-items: left;

  margin: 20px;
  padding: 25px;

  border-radius: 12px;

  color: #0f0f0f;
  background-color: #d3d1b6;

  > h3 {
    padding: 10px;
    &:after {
      content: "";
      display: block;
      width: 100%;
      margin: 2px auto;
      border-bottom: 2px solid #f9bb4b;
    }
  }
  > p {
    padding: 12px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonEdit = styled.button`
  width: 36px;
  height: 36px;

  border-radius: 5px;
  padding: 2px;
  background-color: #00b712;
  background-image: linear-gradient(315deg, #00b712 0%, #5aff15 74%);

  opacity: 0.5;
  transition: opacity ease-in 0.2s;
  > img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 1;
  }
`;

export const ButtonDelete = styled.button`
  width: 36px;
  height: 36px;

  border-radius: 5px;
  padding: 2px;
  background-color: #f7b42c;
  background-image: linear-gradient(315deg, #f7b42c 0%, #fc575e 74%);

  opacity: 0.5;
  transition: opacity ease-in 0.2s;

  > img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 1;
  }
`;

export const Footer = styled.div`
  background-color: #f9bb4b;

  padding: 25px;
  margin: 10px 25px;
  border-radius: 12px;
`;
