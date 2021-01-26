import styled from "styled-components";

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

  background-color: #4a4e4d;
`;

export const FormTitle = styled.h2`
  color: #fff;
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
