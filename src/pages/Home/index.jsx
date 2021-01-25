import { Container, InfoSpedy, ImageLogo } from "./styles";
import homeImg from "../../assets/images/homepageImage.svg";
import { Link } from "react-router-dom";

const HomePage = () => (
  <Container>
    <InfoSpedy>
      <h1>Spedy - Dev Test</h1>
      <p>
        Acompanhe os <Link to="/classificados">Classificados</Link> mais
        recentes.
      </p>

      <p>
        <Link to="/criar/classificados">Criei</Link> novos classificados, apos
        se identificar no site.
      </p>
    </InfoSpedy>
    <Link to="/classificados">
      <ImageLogo src={homeImg} alt="Logo" />
    </Link>
  </Container>
);
export default HomePage;
