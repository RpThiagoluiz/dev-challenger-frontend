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
  justify-content: flex-start;
  margin: 60px;
`;

export const NewContent = styled.div`
  width: 350px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 2px 10px 0 rgba(45, 117, 187, 0.4);
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);

    border-radius: 10px;
  }

  margin: 20px;
  padding: 25px;

  border-radius: 12px;

  color: #0f0f0f;
  border: 4px solid #d3d1b6;
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

export const ButtonDelete = styled.button`
  position: relative;
  left: 250px;
  bottom: 10px;

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
