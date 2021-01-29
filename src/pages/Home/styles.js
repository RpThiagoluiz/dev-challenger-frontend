import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to left, #f9bb4b 50%, #d3d1b6 50%);

  height: 100vh;

  display: flex;
  justify-content: space-around;

  @media (max-width: 780px) {
    background: rgb(242, 191, 95);
    background: radial-gradient(
      circle,
      rgba(242, 191, 95, 1) 40%,
      rgba(211, 209, 182, 1) 86%
    );
    justify-content: center;
    align-items: center;
  }
`;

export const ImageLogo = styled.img`
  margin-top: 10em;

  @media (max-width: 780px) {
    position: absolute;
    bottom: 50px;
    left: 50px;
    width: 78px;
    height: 78px;
  }

  @media (max-width: 560px) {
    width: 36px;
    height: 36px;
  }
`;

export const InfoSpedy = styled.div`
  color: #d75745;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  > h1 {
    font-size: 48px;
    &:after {
      content: "";
      display: block;
      margin-top: 2px;
      width: 100%;
      border-bottom: 2px solid #394d5c;
    }
  }
  > p {
    color: #0f0f0f;
    > a {
      color: #2d75bb;
      text-decoration: none;

      transition: color ease-in 0.2s;
      &:hover {
        color: #d75745;
      }
    }
  }

  @media (max-width: 780px) {
    > h1 {
      margin-bottom: 5px;
    }
    > p {
      margin: 25px;
    }
  }
`;
