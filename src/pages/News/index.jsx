import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
  ButtonContainer,
  ButtonEdit,
  ButtonDelete,
  Footer,
} from "./styles";
//Icons
import deleteIcon from "../../assets/images/delete.svg";
import editIcon from "../../assets/images/edit.svg";

const News = () => {
  const [apiCall, setApiCall] = useState([]);

  //call backend - API
  useEffect(() => {
    api.get("http://localhost:3333/classificados").then((response) => {
      setApiCall(response.data);
    });
  }, [apiCall]);

  const handleDeleteButton = async (id, e) => {
    await axios.delete(`http://localhost:3333/classificado/delete/${id}`);
    console.log(`clicado ${id}`);
  };

  //updateNews

  return (
    <Container>
      <Header>
        <h1>Classificados</h1>
        <Link to="/classificados/criar">
          <button>+ Novo classificado</button>
        </Link>
      </Header>
      <Main>
        {apiCall.map((el) => (
          <NewContent key={el.id}>
            <h3>{el.title}</h3>
            <small>{formatDate(el.createAt)}</small>
            <p>{el.description}</p>
            <ButtonContainer>
              <ButtonEdit>
                <img src={editIcon} alt="Editar" />
              </ButtonEdit>
              <ButtonDelete onClick={(e) => handleDeleteButton(el.id, e)}>
                <img src={deleteIcon} alt="deletar" />
              </ButtonDelete>
            </ButtonContainer>
          </NewContent>
        ))}
      </Main>
      <Footer>
        <h3>15 classificados</h3>
      </Footer>
    </Container>
  );
};
export default News;
