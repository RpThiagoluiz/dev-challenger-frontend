import { useHistory } from "react-router-dom";

//Styles
import { Button } from "./styles";
//Image
import backButtonIcon from "../../assets/images/backBtn.svg";

const ButtonBackPage = () => {
  const { goBack } = useHistory();

  return (
    <Button onClick={goBack}>
      <img src={backButtonIcon} alt="Voltar" />
    </Button>
  );
};
export default ButtonBackPage;
