import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to left, #f9bb4b 50%, #d3d1b6 50%);

  height: 100vh;

  display: flex;
  justify-content: space-around;
`;

export const ImageLogo = styled.img`
  margin-top: 10em;
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
`;
