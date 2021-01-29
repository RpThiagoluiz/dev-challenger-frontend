import { Container } from "./styles";
import errorIcon from "../assets/images/error.svg";

const ErrorAPICall = ({ description }) => {
  return (
    <Container>
      <img src={errorIcon} alt="Erro" />
      <h1>ERROR 400!</h1>
      <p>{description}</p>
    </Container>
  );
};
export default ErrorAPICall;
