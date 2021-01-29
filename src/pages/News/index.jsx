import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//ErrorCallApi
import ErrorAPICall from "../../errors";

//Api
import api from "../../services/api";
//Utils
import formatDate from "../../utils/formatDate";
//Styles
import {
  Container,
  Header,
  Main,
  NewContent,
  ButtonDelete,
  Footer,
} from "./styles";
//Icons
import deleteIcon from "../../assets/images/delete.svg";

const News = () => {
  const [apiCall, setApiCall] = useState([]);
  const [errorBol, setErrorBol] = useState(false);
  const [errorMessage, SetErrorMessage] = useState("");

  //call backend - API
  useEffect(() => {
    api
      .get("http://localhost:3333/classificados")
      .then((response) => {
        setApiCall(response.data);
      })
      .catch((err) => {
        setErrorBol(true);
        console.log(err);
        SetErrorMessage(err);
      });
  }, [apiCall]);

  const handleDeleteButton = async (id, e) => {
    await axios.delete(`http://localhost:3333/classificado/delete/${id}`);
    console.log(`clicado ${id}`);
  };

  const apiSuccessCall = () => (
    <>
      <Main>
        {apiCall.map((el) => (
          <NewContent key={el.id}>
            <h3>{el.title}</h3>
            <small>{formatDate(el.createAt)}</small>
            <p>{el.description}</p>

            <ButtonDelete onClick={(e) => handleDeleteButton(el.id, e)}>
              <img src={deleteIcon} alt="deletar" />
            </ButtonDelete>
          </NewContent>
        ))}
      </Main>
      <Footer>
        <h3>{apiCall.length} classificados</h3>
      </Footer>
    </>
  );

  return (
    <Container>
      <Header>
        <h1>Classificados</h1>
        <Link to="/classificados/criar">
          <button>+ Novo classificado</button>
        </Link>
      </Header>
      {errorBol ? <ErrorAPICall description="Bad Request" /> : apiSuccessCall()}
    </Container>
  );
};
export default News;
