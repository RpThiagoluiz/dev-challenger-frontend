import { useState } from "react";

//Auth

//Styles
import { Container, Logo, Form, FormTitle, Input, Button } from "./styles";
//Image
import appIcon from "../../assets/images/homepageImage.svg";

const SingIn = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <Container>
      <Logo>
        <img src={appIcon} alt="Logo do app" />
        <h1>Spedy News</h1>
      </Logo>
      <Form onSubmit={() => {}}>
        <FormTitle>Entrar</FormTitle>
        <Input
          required
          type="text"
          placeholder="Usuário"
          onChange={(e) => setUser(e.target.value)}
        ></Input>
        <Input
          required
          type="password"
          placeholder="Senha"
          onChange={(e) => setPass(e.target.value)}
        ></Input>
        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default SingIn;
