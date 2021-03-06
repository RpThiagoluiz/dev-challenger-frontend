import styled, { keyframes } from "styled-components";

const animate = keyframes`
0%{
  transform: translatey(-100px);
  opacity:0;
}

50% {
  opacity:0.3;
}

100% {
  transform: translateY(0px);
  opacity:1;
}

`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;
  background-color: #d3d1b6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 500px;
  min-height: 450px;

  padding: 20px;
  margin: 150px 0;

  border-radius: 12px;

  background: rgba(250, 250, 250, 0.2);
  box-shadow: 0 8px 32px 0 rgba(74, 74, 74, 0.5);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;

  animation: ${animate}.9s ease-in-out;

  @media (max-width: 480px) {
    width: 360px;
  }
  @media (max-width: 360px) {
    width: 240px;
  }
`;

export const FormTitle = styled.h2`
  color: #0f0f0f;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: 600;

  margin-bottom: 20px;

  &:after {
    content: "";
    display: block;
    width: 100%;
    margin: 2px auto;
    border-bottom: 2px solid #d75745;
  }
  @media (max-width: 360px) {
    font-size: 24px;
  }
`;

export const InputTitle = styled.input`
  width: 100%;

  font-size: 22px;

  margin: 7px 0;
  padding: 10px;

  border-radius: 5px;
  &:focus {
    border: 2px solid black;
  }
`;

export const TextArea = styled.textarea`
  resize: none;

  width: 100%;
  min-height: 150px;

  display: inline-block;

  font-size: 18px;

  margin: 7px 0;
  padding: 20px 10px;

  text-align: justify;

  border-radius: 5px;
  &:focus {
    border: 2px solid black;
  }
`;

export const Button = styled.button`
  width: 100%;

  margin: 25px 0;
  padding: 10px;

  border-radius: 5px;

  background-color: #8bc92d;

  text-transform: uppercase;
  font-weight: bold;

  opacity: 0.7;
  transition: opacity ease-in 0.3s;

  &:hover {
    opacity: 1;
  }
`;
