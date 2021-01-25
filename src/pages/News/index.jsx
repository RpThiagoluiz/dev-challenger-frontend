import { Link } from "react-router-dom";
//Components
import NewsContent from "../../components/NewsContent";

import { Container, Header, Main, Footer } from "./styles";

const News = () => (
  <Container>
    <Header>
      <h1>Classificados</h1>
      <Link to="/criar/classificados">
        <button>+ Novo classificado</button>
      </Link>
    </Header>
    <Main>
      <NewsContent />
      <NewsContent />
      <NewsContent />
      <NewsContent />
      <NewsContent />
      <NewsContent />
      <NewsContent />
      <NewsContent />
    </Main>
    <Footer>
      <h3>15 classificados</h3>
    </Footer>
  </Container>
);
export default News;
