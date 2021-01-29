import styled from "styled-components";

export const Header = styled.div`
  position: absolute;
  top: 15px;

  width: 100%;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 5px;

  background-color: #f9bb4b;

  > button {
    display: flex;
    align-items: center;

    border: none;
    background: none;

    font-weight: 700;

    > img {
      width: 28px;
      height: 28px;
      padding: 5px;
    }
  }
  @media (max-width: 420px) {
    font-size: 12px;
  }
  @media (max-width: 280px) {
    font-size: 10px;
  }
`;
