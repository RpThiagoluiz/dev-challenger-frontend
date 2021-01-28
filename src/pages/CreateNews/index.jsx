import { useState } from "react";
import axios from "axios";

//Components
import MainHeader from "../../components/MainHeader";

//Styles
import {
  Container,
  Form,
  FormTitle,
  InputTitle,
  TextArea,
  Button,
} from "./styles";

const CreateNews = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmitForm = async (e) => {
    await axios.post("http://localhost:3333/classificados/criar", {
      title,
      description,
    });
    e.preventDefault();
    console.log(title, description);
    alert(`Classificado cadastrado com Sucesso!`);
    setTitle("");
    setDescription("");
  };
  return (
    <Container>
      <MainHeader />
      <Form onSubmit={handleSubmitForm}>
        <FormTitle>Classificado</FormTitle>
        <InputTitle
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          rows={10}
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};

export default CreateNews;
