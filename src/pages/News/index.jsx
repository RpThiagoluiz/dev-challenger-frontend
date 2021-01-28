import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//Api
import api from "../../services/api";
//Styles
import { Container, Header, Main, NewContent, Footer } from "./styles";

const News = () => {
  const [apiCall, setApiCall] = useState([]);

  //call backend - API
  useEffect(() => {
    api.get("http://localhost:3333/classificados").then((response) => {
      setApiCall(response.data);
    });
  }, [apiCall]);

  const handleDeleteButton = async (id, e) => {
    await axios.delete(`/classificado/delete/${id}`);
    console.log(`clicado ${id}`);
  };

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
            <small>{el.createAt}</small>
            <p>{el.description}</p>
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
