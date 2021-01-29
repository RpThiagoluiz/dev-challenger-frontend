import { useHistory } from "react-router-dom";
//Custom-Hook
import { useAuth } from "../../hooks/auth";
//Components
import ButtonBackPage from "../ButtonBackPage";
//Styles
import { Header } from "./styles";

//Images
import singOutIcon from "../../assets/images/singout.svg";

const MainHeader = () => {
  const { signOut } = useAuth();

  return (
    <Header>
      <ButtonBackPage />
      <h1>Criar classificado</h1>
      <button onClick={signOut}>
        <img src={singOutIcon} alt="SAIR" />
        Sair
      </button>
    </Header>
  );
};

export default MainHeader;
