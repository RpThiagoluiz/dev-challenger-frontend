import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 150px;

  display: flex;
  flex-direction: column;
  align-items: left;

  margin: 20px;
  padding: 25px;

  border-radius: 12px;

  color: white;
  background-color: black;
  > p {
    margin-top: 5px;
  }
`;
