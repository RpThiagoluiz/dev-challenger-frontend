import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;

  margin-left: 480px;
  padding: 50px;

  > img {
    width: 150px;
    height: 150px;
  }
  > h1 {
    font-size: 36px;
  }
`;
